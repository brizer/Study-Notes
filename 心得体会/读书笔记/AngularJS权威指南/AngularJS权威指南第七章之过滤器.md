# AngularJS权威指南第七章之过滤器

---

##**前言**

AngularJS中过滤器的作用就是格式化展示数据。
开发者可以自定义过滤规则，来创建过滤器。

---

##**调用过滤器**

在HTML中的模板{{}}内通过|符号来调用过滤器。
例如字符转大写：

    {{name | uppercase}}

在javascript代码中可以通过哦$filter来调用过滤器。
例如字符串小写：
```
    app.controller('DemoController',['$scope','$filter'],function($scope,$filter){
      $scope.name = $filter(lowercase')('LIUFANG');
    });
```

---
##**内置过滤器**

###**currency**

currency过滤器可以将一个数值格式化为货币格式。

    <h2>{{ 123 | currency}}</h2><!-- $123.00 -->

当然我们也可以自定义货币符号：
 

     <h2>{{ 123 | currency:"￥"}}</h2><!-- ￥123.00 -->
     
###**date**

date过滤器可以将日期格式化成需要的格式：
```
      <h1>date过滤器</h1>
      <h5>{{today }}</h5><!-- "2016-01-23T08:44:59.271Z" -->
      <h5>{{today | date:'medium' }}</h5><!-- Jan 23, 2016 4:44:59 PM -->
      <h5>{{today | date:'short' }}</h5><!-- 1/23/16 4:44 PM -->
      <h5>{{today | date:'fullDate' }}</h5><!-- Saturday, January 23, 2016 -->
      <h5>{{today | date:'longDate' }}</h5><!-- January 23, 2016 -->
      <h5>{{today | date:'mediumDate' }}</h5><!-- Jan 23, 2016 -->
      <h5>{{today | date:'shortDate' }}</h5><!-- 1/23/16 -->
      <h5>{{today | date:'mediumTime' }}</h5><!-- 4:44:59 PM -->
      <h5>{{today | date:'shortTime' }}</h5><!-- 4:44 PM -->
```

还有很多种类可以查阅[API][1]，这里就不一样列举了。

###**filter**
[filter过滤器][2]可以从一个给定数组中选择一个子集，并将其生成一个新数组返回，和原生的数组方法filter类似。这个过滤器通常用来过滤需要进行展示的元素，例如搜索等场景。
html调用方式：

    {{ filter_expression | filter : expression :comparator}}

javascript调用方式：

    $filter('filter')(array, expression, comparator)

参数expression的值可以是字符串、对象或者函数。
**如果是字符串**，则返回所有包含这个字符串的元素，如果取反，加!即可。
**如果是对象**，AngularJS会将带过滤对象的属性同这个对象中的同名属性进行比较，如果属性值是字符串就会判断是否包含该字符串，如果我们希望对全部属性进行对比，可以将$当做键名。
**如果是函数**，则对每个元素执行这个函数，将非假值通过新数组返回。

      <h1>filter过滤器</h1>
      <h5>{{['Liu','Fang','Tian','Yu','Qing'] | filter:'n'}}</h5><!-- ["Fang","Tian","Qing"] -->
      <h5>{{ numArray |filter: isBiger }}</h5><!-- [3,4,5] -->
    </div>
    <script>
    var app = angular.module('myapp',[]);
    app.run(function($rootScope){
      $rootScope.today = new Date();
      $rootScope.numArray = [1,2,3,4,5];
      $rootScope.isBiger = function(item){
        return item>2;
      }
    });
    </script>

一般是自己定义过滤函数来过滤。

###**json**
json过滤器很方便，可以将一个JSON或javascript对象转换成字符串，这种转换对调试非常用帮助：

     <h1>json过滤器</h1>
     <h5>{{{"name":"liufang","age":23} | json}}</h5><!-- { "name": "liufang", "age": 23 } -->

###**limitTo**
limitTo过滤器会根据传入的参数生成一个新的数组或字符串，新的数组或字符串的长度取决于传入的参数，通过传入参数的正负值来控制从前面还是后面开始截取。

      <h1>limitTo过滤器</h1>
      <h5>{{"今天是个好日子" | limitTo:2}}</h5><!-- 今天 -->
      <h5>{{"今天是个好日子" | limitTo:-2}}</h5><!-- 日子 -->
      <h5>{{[1,2,3,4] | limitTo:2}}</h5><!-- [1,2] -->

###**number**
number过滤器将数字格式化成文本，它的第二个参数是可选的，用来控制小数点后的位数。如果传入非数字字符，则会返回空字符串。

      <h1>number过滤器</h1>
      <h5>{{123456789 | number}}</h5><!-- 123,456,789 -->
      <h5>{{1.23456789 | number:2}}</h5><!-- 1.23 -->

其他过滤器用法不一一列举了，[API][3]都有。

---
##**自定义过滤器**

我们通过一个demo来学习如何自定义过滤器，我们模拟将第一个字符转换为大写：

    <div ng-app="app">
      <h3>{{str | lowercase | myfilter}}</h3><!-- Hello world -->  
    </div>
    <script>
    angular.module("app.filters",[])
      .filter("myfilter",function(){
        return function(input){
          if(input){
            return input[0].toUpperCase()+input.slice(1);
          }
        }
      });
    var app = angular.module("app",["app.filters"]);
    app.run(function($rootScope){
      $rootScope.str = "hello world";
    });
    </script>

我们连续利用了多个过滤器，用法就是直接|接着|即可。

---
##**表单验证**

1.3版本后的AngularJS推出来[ngMessage][4]来优化表单验证。
我们可以使用[ng-message][5]通过不同的情况显示不同的验证消息,但是前提是我们需要下载ngMessages这个验证模块包。

    <form name="myForm">
      <label>Enter your name:</label>
      <input type="text"
             name="myName"
             ng-model="name"
             ng-minlength="5"
             ng-maxlength="20"
             required />
    
      <pre>myForm.myName.$error = {{ myForm.myName.$error | json }}</pre>
    
      <div ng-messages="myForm.myName.$error" style="color:maroon">
        <div ng-message="required">You did not enter a field</div>
        <div ng-message="minlength">Your field is too short</div>
        <div ng-message="maxlength">Your field is too long</div>
      </div>
    </form>

---

##**感悟**

本章主要学习了AngularJS中的过滤器和表单验证。过滤器确实是很方便，特别是可以直接在html代码中进行编写，又可以通过javascript来定义，非常灵活。是一种不错的开发思路。

学习AngularJS这么久，发现写到的javascript代码并不是很多，不像jquery等传统javascript框架，通过利用简化javascript来完成目的。AngularJS基本上通过html就可以解决一些基本的问题，这就可以节约很多时间和开发成本。




  [1]: https://code.angularjs.org/1.2.28/docs/api/ng/filter/date
  [2]: https://code.angularjs.org/1.2.28/docs/api/ng/filter/filter
  [3]: https://code.angularjs.org/1.2.28/docs/api/ng/filter
  [4]: https://code.angularjs.org/1.3.7/docs/api/ngMessages
  [5]: https://code.angularjs.org/1.3.7/docs/api/ngMessages/directive/ngMessages