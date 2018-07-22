# 清华校园网定时连接工具

[![npm](https://img.shields.io/npm/v/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@b1f6c1c4/thunet-reg)
[![npm](https://img.shields.io/npm/dt/@ritou11/thunet-reg.svg?style=flat-square)](https://www.npmjs.com/package/@ritou11/thunet-reg)
[![GitHub last commit](https://img.shields.io/github/last-commit/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg)
[![license](https://img.shields.io/github/license/ritou11/thunet-reg.svg?style=flat-square)](https://github.com/ritou11/thunet-reg/blob/master/LICENSE.md)

> Author: Nogeek
> Email: ritou11@gmail.com

## 使用方法

1. 安装node

2. ```npm install -g yarn```

3. 默认配置文件 ```~/.thunet-reg```，格式如下：<说明 | 默认值>

   ```json
   {
       "username": "<Username>",
       "md5Password": "<Password hashed by MD5>",
       "password": "<Clear text password>",
       "net": "<Ethernet connected with THU network | eth0>",
       "interval": <Interval seconds | 30>
   }
   ```

4. 其中MD5可以[在线生成](http://www.miraclesalad.com/webtools/md5.php)。

5. 在本目录下执行命令：```yarn start```

## 协议

MIT
