# 清华校园网定时连接工具

Author: Nogeek

Email: ritou11@gmail.com

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
