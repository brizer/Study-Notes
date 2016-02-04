#AngularJS权威指南第十四章之服务



---

##**前言**

本章主要学习了服务的基本概念作用以及简单的创建过程。

---

我们之前提到的控制器，只会在需要时被实例化，不再需要就会被销毁。这意味着每次切换路由或重新加载视图时，当前的控制器会被AngularJS清除掉。

而服务提供了一种能在应用的整个生命周期内保持数据的办法，它能够在控制器之间进行通信，并且能保证数据的一致性。
服务是一个单例对象，在每个应用中只会被实例化一次(被`$injector`实例化)，并且是延迟加载的，服务提供了把与特定功能相关联的方法集中在一起的接口。

这里以[$http][1]服务为例，它提供了对浏览器的XMLHttpRequest对象的底层访问功能。

---

##**注册服务**

在AngularJS中有[很多内置服务][2]。创建自己的服务也很容易，只需要注册这个服务即可。服务被注册后，AngularJS编译器就可以引用它，并且在运行时把它当做依赖加载进来。服务名称的注册表使得在测试中伪造和剔除相互隔离的应用依赖变得非常容易。

使用angular.module的factory来创建服务：
```
angular.module('myApp.services',[])
  .factory('githubService',function(){
    var serviceInstance = {}；
    //我们的第一个服务
    return serviceInstance;
});
```
现在githubService已经是这个AngularJS应用的一个服务了。
服务的工厂函数用来生成一个单例的对象或函数，这个对象或函数就是服务，它会存在于应用的整个生命周期内。当我们的AngularJS应用加载服务时，这个函数会被执行并返回一个单例的服务对象。

如果我们需要访问其他服务，可以自己注入：

```
angular.module('myApp.services',[])
  .factory('githubService',function($http){
    var serviceInstance = {"name":"lf"}；
    //显示可以访问$http服务了
    return serviceInstance;
});
```

这样就起到了组装的作用了。

---

##**服务的使用**

做了一个demo，可以简单地代表服务的使用：
```
//定义服务
angular.module('myApp.services',[])
  .factory('githubService',function($http){
  var result = {"name":"liufang"};
  var returnResult = function(word){
    return result.name+word;
  };
  //给外界返回方法
  return {
    events : function(word){
      return returnResult(word);
    }
  };
});
//注入模块和服务
angular.module('myApp',['myApp.services'])
  .controller('ServiceController',function($scope,githubService){
    $scope.word="!!!";
    //使用对应的方法
    $scope.events = githubService.events($scope.word);
  });

```

关于服务的配置查阅[API][3]。

---

##**感悟**

AngularJS提供了很多[内置服务][4]。我们也可以自己定义服务来完成更加复杂的操作。服务和控制器的不同在于服务可以在应用的整个生命周期中存在。当然这也会带来一定的性能问题。

具体在哪些场景下我们会用到自定义服务我还不太了解。但是由于其可以保存数据作为控制器之间的通讯工具是不错的选择呢。




  [1]: http://docs.angularjs.cn/api/ng/service/$http
  [2]: http://docs.angularjs.cn/api/ng/service
  [3]: http://docs.angularjs.cn/guide/services
  [4]: http://docs.angularjs.cn/api/ng/service