# 清华校园网定时连接工具

[![npm](https://img.shields.io/npm/v/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@ritou11/thunet-reg)
[![npm](https://img.shields.io/npm/dt/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@ritou11/thunet-reg)
[![GitHub last commit](https://img.shields.io/github/last-commit/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![license](https://img.shields.io/github/license/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg/blob/master/LICENSE.md)

> Author: Nogeek

> Email: ritou11@gmail.com

## 使用方法

1. ```yarn global add @ritou11/thunet-reg```
2. 默认配置文件 ```~/.thunet-reg```，格式如下：```<说明 | 默认值> [可选]```

   ```
   {
       "username": "<Username>",
       "md5Password": "<Password hashed by MD5>",
       ["password": "<Clear text password>",]
       "net": "<Ethernet connected with THU network | eth0>",
       "interval": <Interval seconds | 30>
   }
   ```

3. 其中MD5可以[在线生成](http://www.miraclesalad.com/webtools/md5.php)。
4. 命令格式如下：
  ```
  thunet-reg [command]
Commands:
  thunet-reg reg [<ip>]  Register the IP
  thunet-reg login       Login my current IP
  thunet-reg logout      Logout my current IP
  thunet-reg auth        Register current IP with auth4
  thunet-reg unauth      Unregister current IP with auth4
Options:
  --version           Show version number                              [boolean]
  -c, --config-file   Json file that contains username, md5_password and other
                      infomation.
                                [string] [default: "/Users/haotian/.thunet-reg"]
  -u, --username      Username of your Tsinghua account.                [string]
  -p, --password      Plaintext password of your Tsinghua account.      [string]
  -m, --md5-password  MD5 password of your Tsinghua account.            [string]
  -n, --net           Network of your computer, e.g. en0, eth0, ...     [string]
  --help              Show help                                        [boolean]
  ```

## 待实现

1. 定时联网
2. auth unauth功能的验证

## 协议

MIT
