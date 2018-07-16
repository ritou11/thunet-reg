const os = require('os');
const path = require('path');
const yargRoot = require('yargs');
const getip = require('./getip.js');
const config = require('./config.json');
const ThunetReg = require('./reg');

const thunetReg = new ThunetReg(1000);

const ips = getip(config.net);
if (ips == null || ips.length <= 0) {
  console.log('Error network configure. Cannot get IP.');
  process.exit(1);
}
console.log(`Got IP: ${ips[0]}`);

thunetReg.reg(config.username, config.md5_password, ips[0]).then(
  ({ data }) => { console.log(data); },
);

module.export = yargRoot
  .option('config-file', {
    describe: 'Json file that contains username, md5_password and other infomation.',
    default: path.join(os.homedir(), '.thunet-reg'),
    type: 'string',
  });
