# AngularJS权威指南第十章之指令生命周期


---

##**前言**

本章主要学习了指令的生命周期和ngModel在自定义指令中的配置和使用方式。

---
##**指令生命周期**

在AngularJS应用启动前，它们以HTML文本的形式保存在文本编辑器中。应用启动后会进行编译和链接，作用域会同HTML进行绑定，应用可以对用户HTML中进行的操作进行实时响应。
整个过程分为两个主要阶段，第一个是**编译阶段**，在编译阶段，AngularJS会遍历整个HTML文档并根据javascript中的指令定义来处理页面上声明指令。

每一个指令的模板中都可能含有另外一个指令，另外一个指令也可能会有自己的模板，当AngularJS调用HTML文档根部的指令时，会遍历其中所有的模板，模板中也可能包含带有模板的指令。

一旦对指令和其中的子模板进行遍历或编译，编译后的模板会返回一个叫做**模板函数**的函数。我们有机会**在指令的模板函数被返回前，对编译后的DOM数进行修改**。在这个时间点DOM树还没有进行数据绑定，所以**此时对DOM树进行操作只会有很少的性能开销**，基于此点，ng-repeat和ng-transclude等内置指令会在这个时候对DOM进行操作。

当我们的DOM结构完成，AngularJS就将新的DOM传递给指令生命周期中的下一个阶段，也就是链接阶段。**模板函数**被**传递给**编译后的DOM树中每个指令定义规则中指定的**链接函数**。

---

接下来继续说指令定义时的配置项。

###**compile**

compile选项可以返回一个对象或函数。
理解compile和link选项是AngularJS需要深入讨论的高级话题之一，对于了解AngularJS究竟是如何工作的至关重要。

设置了complie函数，说明我们希望在指令和实时数据被放到DOM中之前进行DOM操作，因为前面讲到生命周期时也说过，这个编译阶段对DOM操作的性能开销最小。所以在这个函数中进行添加和删除节点等DOM操作是安全的。

这里需要注意一点，就是如果我们同时设置了compile和link这两个选项，这AngularJS会吧compile所返回的函数当作链接函数，而link选项本身则会被忽略。

还有一点就是不要在compile中进行DOM事件监听器的注册，这个操作应该在链接函数中完成。永远记住，编译函数负责对模板DOM进行转换，链接函数负责将作用域和DOM进行链接。

###**link**

链接函数会在模板编译并同作用域进行链接后被调用，它负责设置事件监听器，监视数据变化和实时的操作DOM。这里说的操作DOM需要考虑性能问题。

这样指令的自定义创建配置就大体说完了，在后面的应用中我会进行详细的配置的。

将项目中一个使用nej的datepicker组件封装为自定义指令的关于link配置的实例展示：

```
    adminApp.directive("datePicker", function(){
        var _datePickerUI = {};
 
        function genPagerUI(scope, element, attrs){
            if(!!_datePickerUI[attrs.flag]){
                _datePickerUI[attrs.flag] = eu._$$DatepickUI ._$recycle(_datePickerUI[attrs.flag]);
            }
            _datePickerUI[attrs.flag] = eu._$$DatepickUI._$allocate({
                parent: element[0],
                date: scope.time,
                onchange:function(_data){
                    scope.time = _data.totalData;
                    scope.$apply();
                }._$bind(this)
            });
        }
        return {
            restrict: 'E',
            scope: {
                time: '=time',
            },
            link: function (scope, element, attrs) {
                scope.$watch('time', function () {
                    genPagerUI(scope, element, attrs);
                });
            }
        };
    });
```



---

##**ngModel**

ngModel是一个用法特殊的指令，它提供更底层的API来处理控制器内的数据，当我们在指令中使用ngModel时能够访问一个特殊的API，这个API用来处理数据绑定、验证、css更新等不实际操作DOM的事情。

ngModel控制器会随着ngModel被一直注入到指令中，**为了访问ngModelController**,我们需要使用require设置：
```
var app = angular.module("app",[]);
app.directive("myDirective",function(){
  return {
    require:"?ngModel",
    link:function(scope,ele,attrs,ngModel){
      if(!ngModel) return;
      //现在我们的指令中已经有ngMdelController的一个实例
    }
  };
});
```

ngModelController中有几个属性可以用来检测甚至修改视图。

**\$viewValue**
该属性保存着更新视图所需的实际字符串。

**\$modelValue**
该属性由数据模型持有，该属性和\&viewValue可能是不同的，取决于$parser流水线是否对其进行了操作。

**\$parsers**
\$parsers的值是一个由函数组成的数组，其中的函数会议流水线的形式被逐一调用。ngModel从DOM中读取的值会被传入\$parsers中的函数，并依次被其中的解析器处理。关于\$parsers请看下一节。

**\$formatters**
该属性的值是一个由函数组成的数组，其中的函数会以流水线的形式在数据模型的值发送变化时被逐一调用。它和\$parser流水线互不影响，用来对值进行格式化和转换，以便在绑定了这个值的控件中显示。

**\$viewChangeListeners**
该属性的值是一个由函数组成的数组，其中的函数会以流水线的形式在视图中的值发生变化时被逐一调用。通过\$viewChangeListeners,可以在无需使用$watch的情况下实现类似的行为。由于返回值会被忽略，因此这些函数不需要返回值。

**\$error**
\$error对象中保存着没有通过验证的验证器名称以及对应的错误信息。

**\$pristine**
该值是布尔型的，可以告诉我们用户是否对控件进行了修改。

**\$dirty**
该值和\$pristine取反，可以告诉我们用户是否和控件进行过交互。

**\$valid**
该值告诉我们当前控件是否合法

更多具体的用法可以[查阅API][1]。

---
##**感悟**

这里通过阅读API中的自定义指令绑定ngModel验证来消化了一下各自配置的用法：
```
<!doctype html>
<html lang="zh-CN" ng-app="app">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
<script src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>	
<script src="http://cdn.bootcss.com/ionic/1.2.4/js/angular/angular-sanitize.js"></script>
<style>
[contenteditable] {
  border: 1px solid black;
  background-color: white;
  min-height: 20px;
}

.ng-invalid {
  border: 1px solid red;
}
</style>
</head>
<body>
<form name="myForm">
 <div contenteditable
      name="myWidget" ng-model="userContent"
      strip-br="true"
      required>Change me!</div>
  <span ng-show="myForm.myWidget.$error.required">Required!</span>
 <hr>
 <textarea ng-model="userContent"></textarea>
</form>
<script>
// sce服务和ngSanitize模块的所用是为了自动移除内容中的有害部分如内联事件等
var app = angular.module("app",["ngSanitize"]);
app.directive('contenteditable', ['$sce', function($sce) {
  return {
    restrict: 'A', 
    require: '?ngModel', // 获取NgModelController，并注入到当前指令。？表示如果没有找到，返回null
    link: function(scope, element, attrs, ngModel) {
      // scope:作用域；
      // element：实例元素，值使用此指令的元素；
      // attrs:实例元素的属性数组，可以在link函数间共享；
      // ngModel:通过require参数注入的控制器

      if (!ngModel) return; //如果没有ngModel则返回

      // 定义视图的渲染方法
      ngModel.$render = function() {
        element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
      };

      // 监听改变事件，通过$evalAsync在执行函数后立即调用脏检测
      element.on('blur keyup change', function() {
        scope.$evalAsync(read);
      });
      read(); 

      // 将数据写入model
      function read() {
        var html = element.html();
        // 如果strip-br属性为true且内容为空格
        if ( attrs.stripBr && html == '<br>' ) {
          html = '';
        }
        //设置模型的值
        ngModel.$setViewValue(html);
      }
    }
  };
}]);

</script>
</body>
</html>

```

[demo][2]

其实ngModel就是对应DOM节点的ng-Model,只不过这里由于是自己创建指令的情况，所以显得较为复杂。这里也接触到了`$sce`服务,由于之前没有接触过，对于服务本身来不够了解，但是就我的理解，应该是一种可以拓展的插件，就和jquery的插件类似。因为在使用前需要先加载对应的javascript文件。

自定义指令就类似于组件化开发是实现，在提高前端代码的复用性方面是一个不错的方法，相信在日后的开发中会经常使用的。



  [1]: http://docs.angularjs.cn/api/ng/type/ngModel.NgModelController
  [2]: http://codepen.io/brizer/pen/EPEWdr