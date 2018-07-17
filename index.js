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
  const inputConfig = { username, password, md5Password, net, ip };
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
  .command('reg [<ip>]', 'Register the IP',
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
  .command('login', 'Login my current IP', () => {}, (argv) => {
    const config = readConfig(argv);
    const ck = checkConfig(config);
    if (ck) {
      console.error(ck);
      return;
    }
    thunetReg.login(config.username, config.md5Password).then(
      ({ data }) => { console.log(data); },
    );
  })
  .command('logout', 'Logout my current IP', () => {}, (argv) => {
    const config = readConfig(argv);
    const ck = checkConfig(config);
    if (ck === 'No Username') {
      console.error(ck);
      return;
    }
    thunetReg.logout().then(
      ({ data }) => { console.log(data); },
    );
  })
  .command('auth', 'Register current IP with auth4', () => {}, (argv) => {
    const config = readConfig(argv);
    const ck = checkConfig(config);
    if (ck) {
      console.error(ck);
      return;
    }
    thunetReg.auth4(config.username, config.password).then(
      ({ data }) => { console.log(data); },
    );
  })
  .command('unauth', 'Unregister current IP with auth4', () => {}, (argv) => {
    const config = readConfig(argv);
    const ck = checkConfig(config);
    if (ck === 'No Username') {
      console.error(ck);
      return;
    }
    thunetReg.unauth4().then(
      ({ data }) => { console.log(data); },
    );
  })
  .help()
  .parse;
