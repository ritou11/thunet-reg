# 清华校园网自动认证工具

[![npm](https://img.shields.io/npm/v/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@ritou11/thunet-reg)
[![npm](https://img.shields.io/npm/dt/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@ritou11/thunet-reg)
[![GitHub last commit](https://img.shields.io/github/last-commit/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![license](https://img.shields.io/github/license/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg/blob/master/LICENSE.md)

> Author: Nogeek
>
> Email: ritou11@gmail.com

## 使用方法

1. ```yarn global add @ritou11/thunet-reg``` or ```npm i -g @ritou11/thunet-reg```
2. 默认配置文件 ```~/.thunet-reg```，格式如下：```<说明 | 默认值> [可选]```

   ```
   {
       "username": "<Username>",
       ["md5Password": "<Password hashed by MD5>",]
       ["password": "<Clear text password>",]
   }
   ```
* 其中md5Password仅可用于net.tsinghua的认证，使用auth.tsinghua则需要明文密码。
* 其中MD5可以[在线生成](http://www.miraclesalad.com/webtools/md5.php)。
3. 命令格式如下：
  ```
  thunet-reg [command]
Commands:
  thunet-reg.js login [<ip>]         Login my current IP
  thunet-reg.js logout               Logout my current IP
  thunet-reg.js auth [<ip>]          Register [current] IP with auth4
  thunet-reg.js unauth [<ip>]        Unregister [current] IP with auth4
  thunet-reg.js keeplogin [<delay>]  Keep current IP logged in by continuous
                                     trying
Options:
  --version           Show version number                              [boolean]
  -c, --config-file   Json file that contains username, md5_password and other
                      infomation.
                                             [string] [default: "~/.thunet-reg"]
  -u, --username      Username of your Tsinghua account.                [string]
  -p, --password      Plaintext password of your Tsinghua account.      [string]
  -m, --md5-password  MD5 password of your Tsinghua account.            [string]
  --help              Show help                                        [boolean]
  ```

## 协议

MIT
