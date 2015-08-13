本文主要介绍MongoDB在windows操作系统上的安装和正常连接过程，Linux的同学请绕行。

------
##**安装**##
首先到官网上下载最新的mongoDB客户端，
[mongoDB官网](http://www.mongodb.org/)
![这里写图片描述](http://img.blog.csdn.net/20150811143031538)

------
将下载的安装包到一个文件目录。
![这里写图片描述](http://img.blog.csdn.net/20150811143409364)
其中的data，log和mongo.config是手动添加上去的

------
##**连接**##
运行server文件夹中的bin文件夹中的mongo.exe，就可以正常连接数据库了，如果出现“由于目标计算机积极拒接，无法连接”，可以参考以下文章中的解决办法：[解决办法](http://blog.csdn.net/mevicky/article/details/47312751)

正常连接数据库后显示效果：

![这里写图片描述](http://img.blog.csdn.net/20150811143852998)


