#AngularJS权威指南第十三章之依赖注入


---

##**前言**
本章主要学习依赖注入的思想和用法。其中注入方法分别为隐式、显示和行内注入。

---
##**注入**

一个对象通常有三种方法可以获得对其依赖的控制器：
1. 自己在内部创建依赖，也就是自己实例化一个
2. 通过全部变量进行引用
3. 在需要的地方通过参数进行传递

第三种就是通过依赖注入实现的。其余两种方式会带来各种问题，例如污染全局作用域，使得隔离变量异常困难等。依赖注入是一种设计模式，它可以去除对依赖关系的硬编码，从而可以在运行时改变甚至移除依赖关系。

在编写依赖与其他对象或库的组件时，我们需要描述组件之间的依赖关系，在运行期，注入器`$injetor`会创建依赖的实例，并负责将它传递给依赖的消费者:

```
angular.module('myApp',[])
  .factory('greeter',function(){
    return {
      greet:function(msg) {
        alert(msg);
      }
    }
  })
  .controller('MyController',function($scope,greeter){
      $scope.sayHello = function(){
        greetet.greet("hello");
      };
  });

```

当AngularJS实例化这个模块时，会查找greeter并自然而然地把对它的引用传递进去：

```
<div ng-app="myApp">
  <div ng-controller="MyController">
    <button ng-click = "sayHello()">Hello</button>
  </div>
</div>
```

而在内部，AngularJS的处理过程是下面这样的：

```
//使用注入器加载应用
var injector = angular.injector(['ng','myApp']);
//通过注入器加载$controller服务
var scope = injector.get("$rootScope").$new();
//加载控制器并传入一个作用域
var MyController = $controller("MyController",{$scope:scope})
```

上面并没有出现greeter，是因为$injector会负责为我们查找并加载它。

当我们编写控制器时，如果使用[]标记或进行**显示的声明**，$injector就会假定参数名称就是依赖的名称， 然后会在内部调用**函数的toString()方法**，分析并提取出函数列表，并注入到对象实例。这是**隐式的注入**。

我们也可以通过就配置来**显示地注入声明**，来明确定义一个函数在被调用时需要用到的依赖关系。通过这种方法声明依赖，即使在源代码被压缩或参数名称发生变化的情况下依旧能够正常工作：
```
var aControllerFactory = function aController($scope,greeter){
  //控制器
};
aControllerFactory.$inject = ['$scope','greeter'];

angular.module('myApp',[])
  .controller('MyController',aControllerFactory)
  .factory('greeter',greeterService);
//获取注入器并创建一个新的作用域
var injector = angular.injector(['ng','myApp']),
   controller = angular.get('$controller'),
   rootScope = angular.get('$rootScope'),
   newScope = rootScope.$new();
//调用控制器
controller('MyController',{$scope:newScope});
```

对于这种声明方式来讲，参数顺序非常重要，$inject数组元素的顺序必须和注入参数顺序一一对应。

除了隐式注入和显示注入，还可以随时使用**行内注入声明**：

```
angular.module('myAPP')
  .controller('MyController',['$scope','greeter',function($scope,greeter){
    
  }]);
  
```

由于需要处理的是一个字符串组成的列表，行内注入声明也可也在压缩后的代码中正常运行。

---

##**$injector API**

由于在实际工作中使用场景很少，先不了解，直接查阅[API][1]。

---

##**感悟**

依赖注入做为AngularJS的一个特性，是非常优秀的设计模式。曾经在后端中很常见，现在在前端中也可以见到。通过javascript实现依赖注入的原理其实就是对需要依赖的函数进行toSting()操作来获取函数内容，从而在需要的时候进行实例化。这样的按需加载对性能非常有帮助。

但是对于需要压缩的代码，我们必须显示配置注入关系未免显得有些麻烦，特别是还有参数顺序必须一致的问题。不过我们可以通过ngMin等工具来管理注入关系。




  [1]: http://docs.angularjs.cn/api/auto/service/$injector