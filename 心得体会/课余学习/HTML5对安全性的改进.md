HTML5对安全性的改进



---
[TOC]

##**前言**

通过社区学习HTML5对WEB安全性的改进。

---

##**iframe**

HTML5为iframe元素增加了sandbox属性防止不信任的Web页面执行某些操作，例如访问父页面的DOM、执行脚本、访问本地存储或者本地数据库等等。

用法：
```
<iframe src="/demo/demo_iframe_sandbox.html" sandbox="">
  <p>Your browser does not support iframes.</p>
</iframe>
```

sandbox属性为""，则不允许运行脚。
属性为**allow-scripts**，则允许运行javascript。
属性为**allow-same-origin**,则允许iframe内容被视为与包含文档有相同的来源。
属性为**allow-top-navigation**,则允许iframe内容从包含文档导航加载内容。
属性**allow-forms**，则允许表达提交。

---

##**CSP内容安全策略**

XSS通过虚假内容和诱骗点击来绕过同源策略，XSS的攻击核心的利用了浏览器无法区分脚本是第三方注入的，还是真的是我们应用程序的一部分，[XSS原理][1]。

CSP定义了Content-Security-Policy HTTP头来允许你创建一个可信来源的白名单，使得浏览器只执行和渲染来自这些来源，而不是盲目信任服务器提供的所有内容。即使攻击者可以找到漏洞来注入脚本，但是因为来源不包含在白名单中， 因此将不会执行。

用法：

我们只信任来自googleapi的外来脚本，只需要设置我们的HTTP头：

```
Content-Security-Policy: script-src 'self' https://apis.google.com
```

script-src控制script标签相关的策略，我们指定了`self`和`https://apis.google.com`作为其值，浏览器就只会下载并执行本域和`https://apis.google.com`的脚本。

还有其他指令：

|指令|作用|
|----|----|
|connect-src|限制使用XHR，WebSockets，和EventSource的连接源。|
|font-src|指定字体的下载源。|
|frame-src|指定frame可以嵌入的连接源。|
|img-src|指定图片的加载源。|
|media-src|指定video和audio的数据源。|
|object-src|指定Flash和其他插件的连接源。|
|style-src|指定link的连接源。和script-src类似。|


---
##**感悟**

今日就学会到这些HTML5对于安全性的补充，如果灵活运用，确实可以解决很大麻烦，比如防止XSS，就不用再自己去定义转义了。



  [1]: http://blog.csdn.net/mevicky/article/details/47998083