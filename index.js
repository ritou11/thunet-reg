const _ = require('lodash');
const os = require('os');
const path = require('path');
const fs = require('fs');
const yargRoot = require('yargs');
const { getIp, getMd5 } = require('./utils.js');
const ThunetReg = require('./reg');

const thunetReg = new ThunetReg(1000);

const readConfig = ({ configFile, username, password, md5Password, net, ip }) => {
  let config = {};
  try {
    config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  } catch (e) { config = {}; }
  const inputConfig = { username, password, md5Password, net };
  _.forEach(inputConfig, (value, key) => { config[key] = value || config[key]; });
  if (ip) config.ip = ip;
  else if (config.net) {
    const ips = getIp(config.net);
    if (!(ips == null || ips.length <= 0)) {
      [config.ip] = ips;
    }
  }
  if (config.password) config.md5Password = getMd5(config.password);
  return config;
};

const checkConfig = (config) => {
  if (!config.username) return 'No Username';
  if (!config.md5Password) return 'No Password';
  if (!config.ip) return 'No IP';
  return false;
};

module.exports = yargRoot
  .option('c', {
    alias: 'config-file',
    describe: 'Json file that contains username, md5_password and other infomation.',
    default: path.join(os.homedir(), '.thunet-reg'),
    type: 'string',
  })
  .option('u', {
    alias: 'username',
    describe: 'Username of your Tsinghua account.',
    type: 'string',
  })
  .option('p', {
    alias: 'password',
    describe: 'Plaintext password of your Tsinghua account.',
    type: 'string',
  })
  .option('m', {
    alias: 'md5-password',
    describe: 'MD5 password of your Tsinghua account.',
    type: 'string',
  })
  .option('n', {
    alias: 'net',
    describe: 'Network of your computer, e.g. en0, eth0, ...',
    type: 'string',
  })
  .command(['reg [<ip>]', '$0'], 'Register the IP',
    (yargs) => {
      yargs
        .positional('ip', {
          describe: '<ip> Which IP to register.',
          type: 'string',
        });
    },
    (argv) => {
      const config = readConfig(argv);
      const ck = checkConfig(config);
      if (ck) {
        console.error(ck);
        return;
      }
      thunetReg.reg(config.username, config.md5Password, config.ip).then(
        ({ data }) => { console.log(data); },
      );
    })
  .help()
  .parse;
