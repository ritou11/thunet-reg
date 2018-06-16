const axios = require('axios');
const loopInterval = require('interval-promise');

class ThunetReg {
  constructor(timeout = 1000) {
    this.axios = axios.create({
      baseURL: 'http://net.tsinghua.edu.cn/',
      timeout,
    });
  }

  async reg(username, md5pwd, ip) {
    return this.axios.get(
      '/cgi-bin/srun_portal', {
        params: {
          action: 'login',
          user_name: username,
          user_password: `{MD5_HEX}${md5pwd}`,
          ac_id: 1,
          ip,
        },
      },
    );
  }

  async loopReg(username, md5pwd, ip, interval) {
    console.log(`Started, interval time = ${interval}s`);
    loopInterval(
      async () => {
        this.reg(username, md5pwd, ip).then(
          ({ data }) => {
            console.log(data);
          },
        );
      }, interval * 1000,
    );
  }
}

module.exports = ThunetReg;
