在安装好了mongoDB，进行连接时，会出现该问题：
![这里写图片描述](http://img.blog.csdn.net/20150806102938903)

解决办法如下：
创建一个配置文件：mongo.config
![这里写图片描述](http://img.blog.csdn.net/20150806103029022)

在配置文件中指定数据文件和日志的存放目录：

```
数据文件
dbpath=D:\mongoDB\data

日志文件
logpath=D:\mongoDB\log\mongo.log
```
在文件目录中创建相应的文件夹
然后通过命令行执行配置文件 mongod
![这里写图片描述](http://img.blog.csdn.net/20150806103221432)

接着不要关闭命令行，打开mongo.exe文件：
![这里写图片描述](http://img.blog.csdn.net/20150806103337089)

就可以正常连接mongoDB了

![这里写图片描述](http://img.blog.csdn.net/20150806103411676)