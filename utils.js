const _ = require('lodash');
const Hashes = require('jshashes');
const xEncode = require('./xEncode.js');
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

exports.hashAuth = (username, password, ip, token) => {
  const hmd5 = new Hashes.MD5().hex_hmac(token, 'pwd');
  const base64 = new Hashes.Base64().setTab('LVoJPiCN2R8G90yg+hmFHuacZ1OWMnrsSTXkYpUq/3dlbfKwv6xztjI7DeBE45QA').setUTF8(false);
  const info = `{SRBX1}${base64.encode(xEncode.xEncode(JSON.stringify({
    username,
    password,
    ip,
    acid: 1,
    enc_ver: 'srun_bx1',
  }), token))}`;
  const chksum = new Hashes.SHA1().hex(
    token + username +
    token + hmd5 +
    token + 1 +
    token + ip +
    token + 200 +
    token + 1 +
    token + info,
  );
  return { hmd5, info, chksum };
};
