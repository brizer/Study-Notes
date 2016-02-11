# React之props传递


---

##**前言**

前面讲到了组件的复用方式，本文主要学习props的传递方式。

---

##**传递方式**

React对组件做了一层抽象，组件对外公布一个简单的props来实现功能，但是内部细节却非常复杂。


###**手动传递**

显示地向下传递props可以确保只公开认为是安全的内部API的子集。

```
var FancyCheckbox = React.createClass({
  render: function() {
    var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
    return (
      <div className={fancyClass} onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
});
React.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.body
);
```

###**...**
如果有很多属性呢？还能够一个个地传递吗？
前面说到过，可以通过JSX的`...`语法来传递props：

```
return <Component {...this.props} more="values" />;
```

如果不使用JSX的话，可以通过ES6的[Object.assign][1]方法来实现：

```
return Component(Object.assign({}, this.props, { more: 'values' }));
```

但是我们把所有属性都传下去既冗余也不安全，可以通过[解构][2]和[剩余参数][3]特性来将未知的属性批量提出来：

```
var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, ...other } = this.props;//将checked提出来
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    // `other` 包含 { onClick: console.log } 但 checked 属性除外
    return (
      <div {...other} className={fancyClass} />
    );
  }
});
React.render(
  <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
    Hello world!
  </FancyCheckbox>,
  document.body
);


```
###**重复利用**

如果组件需要使用一个属性又要往下传递，可以直接使用 `checked={checked}` 再传一次。这样做比传整个 `this.props` 对象要好，因为更利于重构和语法检查。

```
var FancyCheckbox = React.createClass({
  render: function() {
    var { checked, title, ...other } = this.props;
    var fancyClass = checked ? 'FancyChecked' : 'FancyUnchecked';
    var fancyTitle = checked ? 'X ' + title : 'O ' + title;
    return (
      <label>
        <input {...other}
          checked={checked}
          className={fancyClass}
          type="checkbox"
        />
        {fancyTitle}
      </label>
    );
  }
});
```




  [1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
  [2]: http://blog.csdn.net/mevicky/article/details/49922883
  [3]: http://blog.csdn.net/mevicky/article/details/49902147