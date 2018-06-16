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

thunetReg.loopReg(config.username, config.md5_password, ips[0], config.interval_s);
