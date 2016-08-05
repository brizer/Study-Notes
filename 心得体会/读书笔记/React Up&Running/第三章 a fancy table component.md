# React Up&Running第三章 a fancy table component



---

##**前言**

本章是通过一步步构建一个完整的表格组件，来向读者演示了React的用法。

---

##**key**

我们看看构建表格组件的代码:
```
getInitialState: function() {
  return {data: this.props.initialData};
},
render: function() {
  return (
    React.DOM.table(null,
      React.DOM.thead(null,
        React.DOM.tr(null,
          this.props.headers.map(function(title, idx) {
            return React.DOM.th({key: idx}, title);
          })
        )
      ),
    React.DOM.tbody(null,
      this.state.data.map(function (row, idx) {
        return (
          React.DOM.tr({key: idx},
            row.map(function (cell, idx) {
              return React.DOM.td({key: idx}, cell);
            })
          )
        );
      })
    )
  )
);
}

```

上面的代码中我们可以看到两个关键点，一个是td标签和th标签采用了key属性，一个是使用了map方法。

采用key的原因[我以前说过][1]，是为了提高virtualdom时diff算法的效率。
而map是[用来遍历][2]。

其他的细节这里就不说了，之前的[入门教程][3]和深入了解都介绍过如何构建一个组件，这里就没有必要再提了。


  [1]: https://github.com/brizer/Study-Notes/blob/master/%E5%BF%83%E5%BE%97%E4%BD%93%E4%BC%9A/%E7%A4%BE%E5%8C%BA/React/%E7%AC%AC%E4%BA%94%E8%AF%BE%E7%BB%84%E4%BB%B6%E6%8B%BC%E8%A3%85.md#key%E7%9A%84%E4%BD%9C%E7%94%A8
  [2]: https://github.com/brizer/Study-Notes/blob/master/%E5%BF%83%E5%BE%97%E4%BD%93%E4%BC%9A/%E7%A4%BE%E5%8C%BA/React/%E7%AC%AC%E4%BA%8C%E8%AF%BE%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.md#%E6%95%B0%E6%8D%AE%E5%BC%95%E5%85%A5
  [3]: https://github.com/brizer/Study-Notes/blob/master/%E5%BF%83%E5%BE%97%E4%BD%93%E4%BC%9A/%E7%A4%BE%E5%8C%BA/React/%E7%AC%AC%E4%BA%8C%E8%AF%BE%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.md