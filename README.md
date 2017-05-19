# 清华校园网定时连接工具

Author: Nogeek

Email: ritou11@gmail.com

## 使用方法

1. 安装node

2. 安装npm

3. 本目录下新建文件config.json ，格式如下：<说明 | 默认值>

   ```json
   {
       "username":"<Username>",
       "md5_password":"<Password hashed by MD5>",
       "net":"<Ethernet connected with THU network | eth0>",
       "interval_s":<Interval seconds | 30>
   }
   ```

4. 其中MD5可以[在线生成](http://www.miraclesalad.com/webtools/md5.php)。

5. 在本目录下执行命令：```npm start```

## 协议

GPLv2