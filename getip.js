var os = require('os');
var ifaces = os.networkInterfaces();

exports.getip = function(ifname){
  var alias = 0;
  var ips =[];
  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return null;
    }
    ips.push(iface.address);
  });
  return ips;
}