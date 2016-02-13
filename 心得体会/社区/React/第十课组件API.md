# React之组件API


---

##**前言**

前面学习了React有关的顶层API，本文学习与组件有关的API。

---

##**setState**

```
setState(object nextState[, function callback])
```

合并 `nextState`和当前`state`。这是在事件处理函数中和请求回调函数中触发 UI更新的主要方法。另外，也支持可选的回调函数，该函数在 `setState`执行完毕并且组件重新渲染完成之后调用。

`setState()` 将总是触发一次重绘，除非在 `shouldComponentUpdate()` 中实现了条件渲染逻辑。如果使用可变的对象，但是又不能在 `shouldComponentUpdate()` 中实现这种逻辑，仅在新 state 和之前的 state 存在差异的时候调用 `setState()` 可以避免不必要的重新渲染。
```
    var Component1 = React.createClass({
        getInitialState: function() {//初始化设置state
            return {
                isClick: !1
            }
        },
        componentDidUpdate: function(){
            console.log('componentDidUpdate')
        },
        clickCb: function() {
            this.setState({
                isClick : !0
            }, function(){
                console.log(this.state.isClick)
            })
        },
        render: function() {
            return (<div onClick={this.clickCb}>
            isClick:{this.state.isClick ? 'yes' : 'nope'}
            </div>)
        }
    });
    var div = document.getElementById('a');
    React.render(
        <Component1 />, div
    );
```

需要注意一点就是，我们在`setState`方法中所定义的回调，它是在组件重新渲染之后才执行的，而不是在我们变更了 `nextState` 的值之后就立即触发。

##**replaceState**

```
replaceState(object nextState[, function callback])
```
类似于 `setState()`，但是删除之前所有已存在的 `state` 键，这些键都不在 `nextState` 中。

`replaceState` 就是一个彻底更换掉 `state` 的方法，寻常使用的时候需要小心使用，避免删掉一些重要的state属性。

##**forceUpdate**

```
forceUpdate([function callback])
```
如果 `render()` 方法从 `this.props` 或者 `this.state` 之外的地方读取数据，你需要通过调用 `forceUpdate()` 告诉 React 什么时候需要再次运行 `render()`。如果直接改变了 `this.state`，也需要调用 `forceUpdate()`。

调用 `forceUpdate()` 将会导致 `render()` 方法在相应的组件上被调用，并且子级组件也会调用自己的 `render()`，但是如果标记改变了，那么 React 仅会更新 DOM。

通常情况下，应该尽量避免所有使用 `forceUpdate()` 的情况，在 `render()` 中仅从 `this.props` 和 `this.state` 中读取数据。这会使应用大大简化，并且更加高效。

使用 `forceUpdate` 的场景可以是，我们不以 `props` 或 `state` 来作为触发渲染的条件，例如使用了一个变量来作为UI内容，在该变量的值改变了且我们希望触发渲染时，可以使用该方法，当然**这种形式是不推荐的**。

##**getDOMNode**

```
DOMElement getDOMNode()
```

如果组件已经挂载到了 DOM 上，该方法返回相应的本地**浏览器 DOM 元素**。从 DOM 中读取值的时候，该方法很有用，比如获取表单字段的值和做一些 DOM 操作。当 `render` 返回 `null` 或者 `false` 的时候，`this.getDOMNode()` 返回 `null`。

返回组件/ReactElement挂载到页面上所对应的DOM元素。



##**isMounted**

```
bool isMounted()
```

如果组件渲染到了 DOM 中，`isMounted()` 返回 `true`。可以使用该方法保证 `setState()` 和 `forceUpdate()` 在**异步场景下的调用不会出错**。

```
    var Component1 = React.createClass({
        getInitialState: function() {
            return {
                content: 'hello'
            }
        },
        componentWillMount: function () {//异步请求
            doSomething(props).then(function (content) {
                if (this.isMounted()) {//如果组件成功挂载在DOM中
                    this.setState({content: content});
                }
            }.bind(this));
        },
        render: function() {
            if(this.state.isClick){
                return (<div>
                content:{this.state.content}
                </div>)
            } else {
                return false;
            }
        }
    });
    var div = document.getElementById('a');
    var c = React.render(
        <Component1 />, div
    );
```

如果该异步请求完成得很快，我们获取到新content时候组件可能还在处于挂载中（mounting）的过程，那么 state 则保持不变（因为**此时 isMounted() 将返回false** ）。

##**setProps**

```
setProps(object nextProps[, function callback])
```

当和一个外部的 JavaScript 应用集成的时候，你可能想给一个用 `React.render()` 渲染的组件打上改变的标记。

尽管在同一个节点上再次调用 `React.render()` 来更新根组件是首选的方式，也可以调用 `setProps()` 来改变组件的属性，**触发一次重新渲染**。另外，可以传递一个可选的回调函数，该函数将会在 `setProps` 完成并且组件重新渲染完成之后调用。

其实setProps跟 setState 类似，不过修改的是 props 罢了：
```
    var Component1 = React.createClass({
        clickCb: function() {
            this.setProps({
                name : 'cnBlog'
            }, function(){
                console.log(this.props)
            })
        },
        render: function() {
            return (<div onClick={this.clickCb}>
                    {this.props.sayhi || 'www.'}
                    {this.props.name || 'nothing'}
            </div>)
        }
    });
    var div = document.getElementById('a');
    React.render(
            <Component1 name="VaJoy" sayhi="Hello " />, div
    );
```

##**replaceProps**

```
replaceProps(object nextProps[, function callback])
```

类似于 `setProps()`，但是删除所有已存在的 props，而不是合并新旧两个 props 对象。


##**Refs**

Refs是一个使用组件的技巧。

为了获得一个到React组件的引用，我们可以使用this来得到当前的React组件，也可以通过refs来指向我们拥有的组件：

```
var MyComponent = React.createClass({
  handleClick: function() {
    // 对myTextInput聚焦
    this.refs.myTextInput.getDOMNode().focus();
  },
  render: function() {
    // ref指向一个组件
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('example')
);

```

整理一下步骤
首先绑定一个`ref`属性到`render`返回的东西上。
然后在代码中通过this.refs.ComponentName.getDOMNode()来获取对应组件的DOM节点。

Ref的作用在于给指定的子组件实例发送消息。

---

##**参考**

[refs][1]
[reactjs入门系列][2]
[组件API][3]


  [1]: http://reactjs.cn/react/docs/more-about-refs.html
  [2]: http://www.cnblogs.com/vajoy/p/4803585.html
  [3]: http://reactjs.cn/react/docs/component-api.html