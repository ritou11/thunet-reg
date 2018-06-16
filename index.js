const getip = require('./getip.js');
const config = require('./config.json');
const http = require('http');

const ips = getip(config.net);
if (ips == null || ips.length <= 0) {
  console.log('Error network configure. Cannot get IP.');
  process.exit(1);
}

console.log(`Got IP: ${ips[0]}`);

const s = `/cgi-bin/srun_portal?action=login&user_name=${
  config.username
}&user_password={MD5_HEX}${
  config.md5_password
}&ac_id=1&ip=${
  ips[0]}`;

const options = {
  host: 'net.tsinghua.edu.cn',
  path: s,
};

console.log(`Started, interval time = ${config.interval_s}s`);

setInterval(() => {
  http.request(options, (response) => {
    let str = '';
    response.on('data', (chunk) => {
      str += chunk;
    });
    response.on('end', () => {
      console.log(str);
    });
  }).end();
}, config.interval_s * 1000);

//
// console.log(s);
