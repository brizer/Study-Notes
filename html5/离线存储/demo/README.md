##**html5离线存储**

1. 一个页面标为离线存储页面，需要给html标签绑定一个manifest属性指向离线配置文件
2. manifest文件内容如下：
```
CACHE MANIFEST
#v0.1.0
CACHE:
js/a.js
css/a.css
NETWORK:
js/b.js
FALLBACK:
404.Html
```
其中第一行的CACHE MANIFEST是必须要的标识

v是版本号

CACHE是要缓存的文件

NETWORK是不需要缓存的文件

FALLBACK是如果差不多文件，替换出现的文件


