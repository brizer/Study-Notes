#**javascript**���Ʊ��ĵ����а�

---

##**ǰ��**

֮ǰ��Chrome��չ��ʱ������������һ�����󣬵�ʱ������һ�������ϣ���Ҫͨ��flash��ʵ�ַ��ʲ���ϵͳ���а�Ĺ��ܣ������ֲ���ʹ��flash���Ͼ����ڻ����˳��г������Ծ�û�м�����ȥ��

�������һƪ���£�˵��һ��ʹ��ԭ��javascript��ʵ�ָ����ı������а�Ĺ��ܣ��ش����������պ�ʹ�á�

---

##**ʵ�ַ���**

���ﶨ��һ���������������£�

```
function copyToClipboard(elem) {
    
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // �����input��ǩ��textarea����ֱ��ָ���ýڵ�
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // ������ǣ���ʹ�ýڵ��textContent
        target = document.getElementById(targetId);
        if (!target) {
        //��������ڣ��򴴽�һ��
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // �۽�Ŀ��ڵ㣬ѡ����������
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // ���и��Ʋ���
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // ���پ۽�
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // �����ʱ����
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // �����ʱ����
        target.textContent = "";
    }
    return succeed;
}
```

���õ�ʱ��

```
copyToClipboard(document.getElementById("name"));
```
idΪname�Ľڵ��е�ֵ�ͽ����˼��а塣


�ײ���Ч��[demo](http://codepen.io/brizer/pen/RaMawJ "")


