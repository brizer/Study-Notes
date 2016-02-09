# React之富交互



---

##**前言**
前面通过完成一个简单的评论组件，以及介绍了JSX的基本语法，对React有了一个大概的了解。
本文主要针对state做一个细谈，对其使用场景和技巧学习。

---
##**交互**

我们来看看交互式的组件：

```
<div id="example"></div>
<script type="text/babel">
var LikeButton = React.createClass({
  getInitialState:function(){
  	return {liked:true};
  },
  handleClick:function(){
  	this.setState({liked:!this.state.liked});
  },
  render:function(){
    var text = this.state.liked?'like':'haven\'t liked';
    return (
      <p onClick={this.handleClick}>
        you {text} this, Click to toggle.
      </p>
    );
  }
});

React.render(
  <LikeButton />,
  document.getElementById('example')
);
</script>
```

前面的笔记也提到过，我们通过`getInitialState`来初始化设置state，通过`setState()`方法来设置state。

---

##**事件处理与合成事件**

在React里，只需要把事件处理器以驼峰命名形式当做组件的props传入即可。React内部会创建一套合成事件系统来使所有事件在IE8以上浏览器表现一致。

如果需要在手机或平板上使用React，需要调用`React.initializeTouchEvents(true);` 启用触摸事件处理。

---

##**事件原理**

###**自动绑定**

在javascript里创建回调的时候，为了保证this的正确性，一般都需要显式地绑定方法到它的实例上。有了React，所有方法被**自动绑定**到了它的组件实例上。React还会缓存这些绑定方法，所有性能不错。

###**事件代理**

React实际并没有把事件处理器绑定到节点本身，当React启动的时候，它在最外层使用唯一一个事件监听器处理所有事件。当组件被加载和卸载时，只是在内部映射里添加或删除事件处理器，React会根据映射来决定如何分发。

---

##**state**

###**工作原理**

我们通常使用`setState(data,callback)`来通知React数据的变化。这个方法会合并`data`到`this.state`，并**重新渲染组件**。渲染完成后，调用可选的`callback`回调。大部分情况下不需要提供 `callback`，因为`React`会负责把界面更新到最新状态。

###**使用场景**

大部分组件的工作应该是从`props`里取数据并渲染出来。但是，有时需要对用户输入、服务器请求或者时间变化等**作出响应**，这时才需要使用state。

常用的模式是创建多个只负责渲染数据的无状态组件，在它们的**上层创建一个有状态组件**并把它的状态通过`props`传给子级。这个**有状态**的组件**封装了所有用户的交互逻辑**，而这些**无状态**组件则**负责声明式地渲染数据**。

###**使用**

state应该包括那些可能被组件的事件处理器改变并**触发用户界面更新**的数据。

state不应该包括那些表示用户界面状态所需的最少数据，比如基于props的重复数据等。


