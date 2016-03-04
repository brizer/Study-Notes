# Sass学习笔记



---

##**前言**

项目中的css预编译选择的是sass，准确的说应该是scss。由于之前没有用过，所以对其进行初步的学习。

---

##**简介**

sass是css预处理的一种方法，作用在于使编写css变得更加简化。

sass与scss的区别在于sass没有大括号，通过缩减来控制代码，而scss则和css类似，保留了大括号语法。

---

##**语法**

**变量**

sass中可以设置变量
```
    $blue : #1875e7;　
    div {
       color : $blue;
    }
```
如果变量需要镶嵌在字符串之中，就必须需要写在#{}之中。
```
    $side : left;
    .rounded {
        border-#{$side}-radius: 5px;
    }
```

**嵌套**
嵌套特性非常常用，在工程中十分方便：

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
//-----------------------------------
//转化结果为：
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
在嵌套的代码块内，可以使用$引用父元素。比如a:hover伪类，可以写成：
```
a {
　　　　&:hover { color: #ffb3ff; }
　　}
```

**文件导入**

我们通过@import来导入别的sass文件：

```
@import 'reset';
```

**mixin**

mixin用来处理兼容性代码最合适不过了：
```
@mixin box-sizing ($sizing) {
    -webkit-box-sizing:$sizing;     
       -moz-box-sizing:$sizing;
            box-sizing:$sizing;
}
.box-border{
    border:1px solid #ccc;
    @include box-sizing(border-box);
}
//转为：
.box-border {
  border: 1px solid #ccc;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
```

这里注意定义@mixin和引用@include。

上面的特性是比较常用的，还有一些数据的运算和颜色的函数等其实不怎么常用，这里就先不整理了。

---

##**感悟**

其实sass本身就是一门工具，如果css本身的功能足够强大了，它的作用也就越来越小了，所以说只在用到的时候看看就可以了。

