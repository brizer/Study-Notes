#**javascript**复制本文到剪切板

---

##**前言**

之前做Chrome扩展的时候遇到过这样一个需求，当时查阅了一定的资料，需要通过flash来实现访问操作系统剪切板的功能，但是又不想使用flash，毕竟后期会逐步退出市场，所以就没有继续下去。

最近看到一篇文章，说到一种使用原生javascript来实现复制文本到剪切板的功能，特此整理，方便日后使用。

---

##**实现方法**

这里定义一个函数，代码如下：

```
function copyToClipboard(elem) {
    
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // 如果是input标签或textarea，则直接指定该节点
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // 如果不是，则使用节点的textContent
        target = document.getElementById(targetId);
        if (!target) {
        //如果不存在，则创建一个
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // 聚焦目标节点，选中它的内容
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // 进行复制操作
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // 不再聚焦
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // 清空临时数据
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // 清空临时数据
        target.textContent = "";
    }
    return succeed;
}
```

调用的时候

```
copyToClipboard(document.getElementById("name"));
```
id为name的节点中的值就进入了剪切板。


亲测有效，[demo](http://codepen.io/brizer/pen/RaMawJ "")


