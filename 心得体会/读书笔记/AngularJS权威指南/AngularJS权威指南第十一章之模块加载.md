# AngularJS权威指南第十一章之模块加载


---

##**前言**
本章虽然叫做模块加载，但是内容却更偏向于AngularJS的运行机制。先进行配置，然后进行运行。

---

AngularJS模块可以在被加载和执行之前对其自身进行配置。我们可以在应用的加载阶段应用不同的逻辑组。

##**配置**

在模板的加载阶段，AngularJS会在提供者注册和配置的过程中**对模块进行配置**。在整个AngularJS工作流中，这个阶段是唯一能够在应用启动前进行修改的部分。
```
myModule.config(['$locationProvider', function($locationProvider) {
  // Configure existing providers
  $locationProvider.hashPrefix('!');
}]);
```

我们在定义模块时没有写config函数，其实AngularJS**会在编译时执行**。例如我们在某个模块上创建一个服务或指令：
```
angular.module("myApp",[])
  .factory('myFactory',function(){
    var service = {};
    return service;
})
  .directive('myDirective',function(){
    return {
      template:'<button>click me</buttom>'
    }
})
```

AngularJS会在编译时执行这些辅助函数，实际上效果等同于下面的代码：
```
angular.module("myApp",[])
  .config(function($provide,$compileProvider){
    $provide.factory("myFactory",function(){
      var service = {};
      return service;
    });
    $compileProvider.directive("myDirective",function(){
      return {
        template:"<button>Click me</button>"
      };
    });
});
```

AngularJS会以这些函数书写和注册的顺序来执行它们，也就是说我们无法注入一个尚未注册的提供者。

在对模块进行配置时，需要格外注意只有提供者和常量可以被注入到config函数中。如果我们将一个服务注入进去，会在真正对其进行配置之前就意外地把服务实例化了。所以我们只能注入用provider()语法构建的服务，其他的则不行。关于provider()构建服务，在14章学习。

---
##**运行**

和配置块不同，**运行块在注入器创建之后被执行**，它是所有AngularJS应用中第一个被执行的方法。

运行块通常用来注册全局的事件监听器。例如，我们会在.run()块中设置路由事件的监听器以及过滤未经授权的请求。

假设我们需要在每次路由发送变化时，都执行一个函数来验证用户的权限，放置这个功能唯一合理的地方就是run方法：

```
angular.module("myApp",[])
  .run(function($rootScope,AuthService){
    $rootScope.$on("$routeChangeStart",function(evt,next,current){
      //如果用户未登录
      if(!AuthService,userLoggedIn()){
        if(next.templateUrl==="login.html"){
          //已经转向登陆路由因此无需重定向
        } else {
          $location.path("/login");
        }
      }
    });
});
```



