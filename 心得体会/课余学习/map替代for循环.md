# map替代for循环

---

##**前言**

最近在学习React时发现this.children.map等用法，发现map其实就是依次遍历的作用。本文主要就map相比遍历的优点进行分析。

---

##**遍历**

我们看看一个常用的场景。将一群邮箱转为小写，我们用for循环来解决这个问题：

```
var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];
 
function getEmailsInLowercase(emails) {
  var lowercaseEmails = [];
 
  for (var i = 0; i &amp;lt; emails.length; i++) {
    lowercaseEmails.push(emails[i].toLowerCase());
  }
 
  return lowercaseEmails;
}
 
var validData = getEmailsInLowercase(mixedEmails);

```

我们发现使用for循环有以下几点缺陷:
1. 需要让程序创建一个**临时列表来存储**复制的邮件地址值。
2. 需要让程序先**计算列表的长度**，以此为次数访问一遍列表。
3. 需要让程序创建一个**计数器用来记录当前访问的位置**。
4. 需要告诉程序**计数的方向**，但顺序在这里并不重要。

---
##**map**

我们可以用map，来简化操作：
```
var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];
 
function getEmailsInLowercase(emails) {
  var lowercaseEmails = [];
 
  emails.map(function(email) {
    lowercaseEmails.push(email.toLowerCase());
  });
 
  return lowercaseEmails;
}
 
var validData = getEmailsInLowercase(mixedEmails);
```

[Array.prototype.map][1]的参数中有值，索引和数组本身。就简化了for循环需要的东西。

**进一步简化**

当然，我们改变一下对数据变化的思考方式，就可以得到更加简单的结果如下：
```
JavaScript

var mixedEmails = ['JOHN@ACME.COM', 'Mary@FooBar.com', 'monty@spam.eggs'];

function downcase(str) {
  return str.toLowerCase();
}

var validData = mixedEmails.map(downcase);
```

这样的高级方式传递想法是函数式编程的核心原则。

---
##**感悟**

编程思想很重要，不能简单的完成任务，要思考自己做的事情到底是为了什么。编程要考虑到性能、可维护性、可拓展性等等。最基本的就是API要运用娴熟，连API都不能做到信手拈来，又怎么能够物尽其用呢？

---
##**参考**
[用Map替代循环的那些好处][2]
[Array.prototype.map][3]


  [1]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  [2]: http://web.jobbole.com/84916/
  [3]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map