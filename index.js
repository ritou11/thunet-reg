var fs = require('fs');
var getip=require('./getip.js');
var config = require('./config.json');
var http = require('http');

ips=getip.getip(config['net']);
if(ips == null || ips.length <= 0){
    console.log('Error network configure. Cannot get IP.');
    return;
}

console.log('Got IP: ' + ips[0]);

var s = '/cgi-bin/srun_portal?action=login&user_name='
    +config['username']
    +'&user_password={MD5_HEX}'
    +config['md5_password']
    +'&ac_id=1&ip='
    +ips[0];

var options = {
  host: 'net.tsinghua.edu.cn',
  path: s
};

console.log('Started, interval time = ' + config['interval_s'] + 's');

setInterval(function(){
    http.request(options, function(response) {
      var str = '';
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        console.log(str);
      });
    }).end();
},config['interval_s']*1000);

//
//console.log(s);