const _ = require('lodash');
const Hashes = require('jshashes');
const ifaces = require('os').networkInterfaces();

exports.getIp = (ifname) => {
  const ips = [];
  _.forEach(ifaces[ifname], (iface) => {
    if (iface.family !== 'IPv4' || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }
    ips.push(iface.address);
  });
  return ips;
};

exports.getMd5 = (pwd) => new Hashes.MD5().hex(pwd);
