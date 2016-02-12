# React之顶层API


---

##**前言**

本文就React相关的API进行了学习，并对大部分常用的进行了整理。

[全面的API][1]

[实例版API][2]


---

`React`是React库的入口。

##**React.createClass**

```
ReactClass createClass(object specification)
```
**创建一个组件**类，并作出定义。组件实现了 `render()` 方法，该方法返回一个子级。该子级可能包含很深的子级结构。组件与标准原型类的不同之处在于，你**不需要使用 new 来实例化**。 组件是一种很方便的封装，可以（通过 new ）为你创建后台实例。

```
var Hello = React.createClass({
    render: function() {
        return <div>Hello World</div>;
    }
});
```


##**React.createElement**

```
ReactElement createElement(
  string/ReactClass type,
  [object props],
  [children ...]
)
```

创建并返回一个新的指定类型的 `ReactElement`。type 参数可以是一个 html 标签名字字符串（例如，“div”，“span”，等等），或者是 ReactClass （通过 React.createClass 创建的）。

我们在JSX中描述的 < Hello /> ，编译后就是 `React.createElement(Hello)`。

##**React.createFactory**

```
factoryFunction createFactory(
  string/ReactClass type
)
```
返回一个生成指定类型 ReactElements 的函数。比如 React.createElement，type 参数可以是一个 html 标签名字字符串（例如，“div”，“span”，等等），或者是 ReactClass。

```
ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  return factory;
};

```
可以用来批量创建某个组件。


##**React.render**

```
ReactComponent render(
  ReactElement element,
  DOMElement container,
  [function callback]
)
```

渲染一个 ReactElement 到 DOM 中，放在 container 指定的 DOM 元素下，返回一个到该组件的引用。

如果 ReactElement 之前就被渲染到了 container 中，该函数将会更新此 ReactElement，仅改变需要改变的 DOM 节点以展示最新的 React 组件。

如果提供了可选的回调函数，则该函数将会在组件渲染或者更新之后调用。

##**React.renderToString**
```
string renderToString(ReactElement element)
```

把组件渲染成原始的 HTML 字符串。该方法`应该仅在服务器端使用`。React 将会返回一个 HTML 字符串。你可以在服务器端用此方法生成 HTML，然后将这些标记发送给客户端，这样可以获得更快的页面加载速度，并且有利于搜索引擎抓取页面，方便做 SEO。

如果在一个节点上面调用 `React.render()`，并且该节点已经有了服务器渲染的标记，React **将会维护该节点，并且仅绑定事件处理器，保证有一个高效的首屏加载体验**。

##**React.Children**

为处理this.props.children这个封闭的数据结构提供的有利工具。

###**React.Children.map**

遍历子元素，映射为一个新的子元素集合（跟 ES5 的 Array.map 差不多）。
```
object React.Children.map(object children, function fn [, object context])
```

在每一个直接子级（包含在 children 参数中的）上**调用 fn 函数**，此函数中的 this 指向 上下文。如果 children 是一个内嵌的对象或者数组，它将被遍历：不会传入容器对象到 fn 中。如果 children 参数是 null 或者 undefined，那么返回 null 或者 undefined 而不是一个空对象。

```
var Component = React.createClass({
      deal : function(child, index){
        console.log(child, index);
        return !!index && child;  //第一个li会被过滤掉，因为其索引为0
      },
      render : function() {
        return (
          <ul>
            {React.Children.map(this.props.children, this.deal)}
          </ul>)
      }
    });
    React.render(
      (
        <Component>
          <li>0</li>
          <li>1</li>
          <li>2</li>
        </Component>
      ), document.body
    )
```

###**React.Children.forEach**

遍历子元素，对每一个子元素执行回调，但不像上述的 map 那样最终返回一个新的集合（跟 ES5 的 Array.forEach 差不多）。

````
React.Children.forEach(object children, function fn [, object context])
```

###**React.Children.count**

```
number React.Children.count(object children)
```

返回 children 当中的组件总数，和传递给 map 或者 forEach 的回调函数的调用次数一致。

###**React.Children.only**

```
object React.Children.only(object children)
```

返回 children 中仅有的子级。否则抛出异常。


  [1]: http://reactjs.cn/react/docs/top-level-api.html
  [2]: http://www.tuicool.com/articles/eQ3yQzi