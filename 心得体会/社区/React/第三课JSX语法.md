# JSX语法

---
##**前言**

前面我们一步一步编写了一个入门级的React组件。其中用到了JSX，本文主要学习JSX的语法。

---

JSX就是javascript和XML结合的一种格式。我们使用React时可以不使用JSX，但是用JSX的话更加方便。

##**渲染html标签和react组件**

React可以渲染HTML或React组件。
如果要**渲染HTML标签**，只需要在JSX里使用小写字母开头的标签名。

```
var myDivElement = <div className="foo" />;
React.render(myDivElement, document.body);
```

如果要**渲染React组件**，只需要创建一个大写字母开头的本地变量。

```
var MyComponent = React.createClass({/*...*/});
var myElement = <MyComponent someProperty={true} />;
React.render(myElement, document.body);
```

也就是说，React的JSX里约**定分别使用首字母大、小写来区分本地组件的类和HTML标签**。

---

##**转换**

JSX把类XML的语法转换成javascript，XML元素、属性和子节点被转换成React.createElement的参数：

```
var Nav;
// 输入 (JSX):
var app = <Nav color="blue" />;
// 输出 (JS):
var app = React.createElement(Nav, {color:"blue"});
```

注意如果要使用`<Nav />`,Nav变量一定要在作用区间内。

JSX也支持使用XML语法定义子节点：

```
var Nav, Profile;
// 输入 (JSX):
var app = <Nav color="blue"><Profile>click</Profile></Nav>;
// 输出 (JS):
var app = React.createElement(
  Nav,
  {color:"blue"},
  React.createElement(Profile, null, "click")
);
```

---

##**javascript表达式**

###**属性表达式**

如果需要设置属性为一个表达式，只需要用一对{}包括：

```
// 输入 (JSX):
var person = <Person name={window.isLoggedIn ? window.name : ''} />;
// 输出 (JS):
var person = React.createElement(
  Person,
  {name: window.isLoggedIn ? window.name : ''}
);
```

###**子节点表达式**

同样的，子节点也可以通过表达式来表示：

```
// 输入 (JSX):
var content = <Container>{window.isLoggedIn ? <Nav /> : <Login />}</Container>;
// 输出 (JS):
var content = React.createElement(
  Container,
  null,
  window.isLoggedIn ? React.createElement(Nav) : React.createElement(Login)
);
```

---

##**注释**

注释需要用{}包括
```
var content = (
  <Nav>
    {/* 一般注释, 用 {} 包围 */}
    <Person
      /* 多
         行
         注释 */
      name={window.isLoggedIn ? window.name : ''} // 行尾注释
    />
  </Nav>
);
```

---
##**属性**

如果事先知道组件所有属性，可以如下书写JSX：

```
 var component = <Component foo={x} bar={y} />;
```
 
如果不知道要设置哪些props，最好不要先设置它：
 
```
  var component = <Component />;
  component.props.foo = x; // 不好
  component.props.bar = y; // 同样不好 
```
  
props应该被当做禁止修改的，因为可能导致预料之外的结果。

  
---

##**延展属性**

为了解决上面说的那种情况，我们可以利用JSX的延展属性：


```
  var props = {};
  props.foo = x;
  props.bar = y;
  var component = <Component {...props} />;
```

传入对象的属性会被复制到组件内，它可以和其他属性一起用，但是需要注意后者会覆盖前者：

```
  var props = { foo: 'default' };
  var component = <Component {...props} foo={'override'} />;
  console.log(component.props.foo); // 'override'
```

---

##**JSX与HTML**

JSX和HTML非常相似，但是有一些不同，比如说对于HTML实体，由于React会默认转义所有字符串来防止XSS攻击，所以下面代码：
```
<div>First &middot; Second</div>
```

结果可能为：

```
// 错误: 会显示 “First &middot; Second”
<div>{'First &middot; Second'}</div>
```

我们有几种方式可以**绕过这个限制**。
一，直接使用Unicode字符，例如以下：

```
<div>{'First · Second'}</div>
```

需要写成如下样子：

```
<div>{'First \u00b7 Second'}</div>
<div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
```

二，也可以在数组里混合使用字符串和JSX元素：

```
<div>{['First ', <span>&middot;</span>, ' Second']}</div>
```

三，直接使用原始HTML：

```
<div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />
```

最后需要注意一点就是往原生HTML元素里传入HTML规范里不存在的属性需要使用`data-`前缀。