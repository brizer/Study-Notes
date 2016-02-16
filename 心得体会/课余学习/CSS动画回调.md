# CSS动画回调


---

##**前言**

传递的javascript式动画，可以很容易地通过回调函数来实现动画完成后做什么，而css3动画则不好通过javascript来回调。如何解决这个问题呢？

---
##**css动画**

css动画我[以前在文章中][1]提到过。这里写几个基本用法，第一种是简单的变换，使用transform即可：
```
.mydiv {
    width:100px;
    height:100px;
    background:red;
    -webkit-transition: all 2s;
}
.newClass {
    -webkit-transform: translateY(100px)
}
```
第二种是复杂一点，需要自己定义帧的状态：
```
@-webkit-keyframes mymove {
    from {top:0px;}
    to {top:200px;}
}
.mydiv {
    width:100px;
    height:100px;
    background:red;
    position:relative;
    -webkit-animation:mymove 2s forwards; /* Safari and Chrome */
}
```
---

##**如何回调css动画**

回到一开始提出的问题，我们如何回调。
一种最基本的想法就是我们知道了动画的时间，那么可以通过延时来模拟回调：
```
//css中代码可以看到动画持续2s
var delay = 2000;
setTimeout(function(){
    dosomething()
}, delay);
```

但是只要深入理解一点就知道setTimeout并不可靠，而且这么写可拓展性也太差了。

那么解决办法就是通过新的事件transitionEnd和animationend：
```
document.getElementById('my').addEventListener('transitionEnd', function(){
    alert('Transform animation has done!');
});


document.getElementById('my').addEventListener('animationend', function(){
    alert('Animation has done!....');
});
```

这样就简单了。当然[还有animationstart,animationiteration][2]等事件，这里就不一一介绍了。

---
##**参考**

[css3动画][3]

[css动画的回调][4]

[AnimationEvent][5]


  [1]: http://blog.csdn.net/mevicky/article/details/49227665
  [2]: https://developer.mozilla.org/zh-CN/docs/Web/API/AnimationEvent/AnimationEvent
  [3]: http://blog.csdn.net/mevicky/article/details/49227665
  [4]: http://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=401718037&idx=2&sn=517ca208992563a120a8dcd3a728ba8a&scene=0
  [5]: https://developer.mozilla.org/zh-CN/docs/Web/API/AnimationEvent/AnimationEvent