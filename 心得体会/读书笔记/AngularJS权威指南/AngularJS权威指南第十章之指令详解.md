#AngularJS权威指南第十章之指令详解


---

##**前言**
本章就AngularJS的指令定义进行学习，并就每个配置项的使用进行说明。

---

##**指令的定义**

AngularJS中的directive()方法是用来定义指令的。指令定义的完整参数如下：
```
var app = angular.module("app",[]);
app.directive('myDirective',function(){
  return {
    restrict:String,
    priority:Number,
    terminal:Boolean,
    template:String or Template Function;
        function(tElement,tAttrs){...};
    templateUrl:String,
    replace:Boolean or Object,
    scope:Boolean or Object,
    transclude:Boolean,
    controller:String or
    function(scope,element,attrs,transclude,otherInjectables){...},
    controllerAs:String,
    require:String,
    link:function(scope,iElement,iAttrs){...},
    complie://返回一个对象或连接函数，如下所示:
        function(tElement,tAttrs,transclude){
            return {
                pre:function(scope,iElement,iAttrs,controller){...},
                post:function(scope,iElement,iAttrs,controller){...}
            }
            //或者
            return function postLink(...){...}
        }
  };
});
```

当AngularJS在DOM中遇到具名的指令时，会去匹配已经注册过的指令，并通过名字在注册过的对象中查找，此时，就开始了一个指令的生命周期，指令的生命周期开始于`$compile`方法并结束于link方法，后面会详细介绍。

下面来说说每个具体的配置。

###**restrict（字符串）**

restrict是一个可选的参数，默认值是A。还可以选择E,C,M。区别如下：

E(元素)
<my-directive></my-directive>
A(属性，默认值)
<div my-directive="expression"></div>
C(类名)
<div class="my-directive:expression;"></div>
M(注释)
<--directive:my-directive expression-->

###**priority(数值型)**

优先级参数priority默认是0，如果需要设置可以指定，例如ng-repeat的优先级是1000，这样才能保证在同一元素上，它总是在其他指令之前被调用。

###**terminal(布尔型)**

这个参数用来告诉AngularJS停止运行当前元素上比本指令优先级低的指令。但优先级相同的指令还是会被执行。

###**template(字符串或函数)**

template参数是可选的，必须被设置为以下两种形式之一：

1. 一段HTML文本；
2. 一个可以接受两个参数的函数，参数为tElement和tAttrs，并返回一个代表模板的字符串。tElement和tAttrs中的t代表template，是相对于instance的。

template中可以通过大括号标记来访问作用域，例如`{{expression}}`。
如果template中包含多个DOM元素，或者只由一个单独的文本节点构成，那它必须被包含在一个父元素内。换句话说，必须存在一个根DOM元素：
```
template:'\
    <div><-- single root element -->\
        <a href="http://baidu.com">Click me</a>\
        <h1>when using two elements,wrap them in a parent element</h1>\
    </div>\'
```

可以看到每一行末尾的反斜线，所以一般通过templateUrl参数来引用外部模板。

###**templateUrl(字符串)**

参数的值为一个代表外部HTML文件路径的字符串。调用指令时会在后台通过ajax来请求html模板文件，这里需要注意一个问题，就是模板加载是异步的，意味着编译和链接要暂停，等待模板加载完成。

但是，通过ajax异步加载大量的模板将严重影响性能，所以我们在部署应用之前可以对HTML模板进行缓存。关于缓存可以看28章。

模板加载后，AngularJS会将它默认缓存到$templateCache服务中，实际生产中，可以提前将模板缓存到一个定义模板的javascript文件中，这样就不需要通过XHR来加载模板了，具体看34章。

###**replace(布尔型)**

replace是一个可选参数，默认为false,如果设置为true，则意味着定义的指令会不显示。


    
###**scope(布尔型或对象)**

默认值是false，可以被设置为true或一个对象。
如果设为true，会从父作用域继承并创建一个新的作用域对象。

我们看一个例子：
```
<div  ng-init="someProperty = 'some data'"></div>
<div ng-init="siblingProperty='moredata'">
  Inside Div Two : {{ aThirdProperty }}
  <div ng-init="aThirdProperty = 'data for 3rd property'" ng-controller="SomeController">
    Inside Div Three : {{ aThirdProperty }}
    <div ng-controller="SecondController">
      Inside Div Four: {{aThirdProperty}}
      <br>
      Outside myDirective: {{myProperty}}
      <div my-directive ng-init="myProperty='wow,this is cool'">
        Inside myDirective:{{myProperty}}
      </div>
    </div>
  </div>
</div>
<script>
var app = angular.module("app",[]);
app.controller("SomeController",function($scope){});
app.controller("SecondController",function($scope){});
app.directive('myDirective',function(){
  return {
    restrict:'A',

  };
});
</script>
```

结果为：
Inside Div Two :
Inside Div Three : data for 3rd property
Inside Div Four: data for 3rd property 
Outside myDirective: wow,this is cool
Inside myDirective:wow,this is cool

结果的前三行说明了作用域只能从父到子，不能从子到父；
后面两行说明指令外是可以访问到指令内的作用域的。
但是如果我们给指令添加scope：
```
app.directive('myDirective',function(){
  return {
    restrict:'A',
    scope:true
  };
});
```

结果就变为：
Inside Div Two :
Inside Div Three : data for 3rd property
Inside Div Four: data for 3rd property 
Outside myDirective:
Inside myDirective:wow,this is cool

从第四行可以看出指令外不能访问到指令内的作用域了。


**绑定策略**

AngularJS提供了几种方法能够将指令内部的隔离作用域，同指令外部的作用域进行绑定。
为了让新的指令作用域可以访问当前本地作用域中的变量，需要用到下面三种别名中的一种：
@，使用@符号将本地作用域同DOM属性的值进行绑定。指令内部作用域可以使用外部作用域的变量。
=，使用=符号将本地作用域同父级作用域上的属性进行双向数据绑定。
&，使用&对父级作用域进行绑定，以便在其中运行函数。


---

##**感悟**

觉得有点复杂呢，主要是配置项有点多，且有些配置项的使用还不能够非常理解。希望在后面的学习中，可以在应用中边学习边理解。
