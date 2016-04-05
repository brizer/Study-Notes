#**jQuery面向对象的写法**

##**前言**

作为前端开发者，一般的简单逻辑可能已经习惯了运用面向函数的编程方法，今天主要看看jQuery中的面向对象的写法，其实原生的也是差不多的。

---

##**面向对象的写法**

这里以一个播放器组件为例子，通过定义一个jQuery的全局对象来引用它：

```
(function(jq, g){
 
 function VideoDialog(){
  //执行初始化
  return this.init.apply(this, arguments);
 }
 
 var vPro = VideoDialog.prototype;
 var maskObj = jq.showComMask();
 //定义UI相应的html。至于css则在对应的css文件中去定义
 var tpl = '<div class="u-video-dialog" id="j-videoDialog">\
     <div class="title">\
      <h3>视频介绍</h3>\
      <a class="close" id="j-close"></a>\
     </div>\
     <div class="video-box" id="j-videoBox">\
     </div>\
    </div>';
 
 vPro.init = function (data) {
  if(!data){
   return;
  }
  //统一定义变量
  this.tpl = $(tpl);
  this.videoBoxNode = this.tpl.find('#j-videoBox');
  this.closeBtnNode = this.tpl.find('#j-close');
 
  jq.cloudPlayer({
         parent : $(this.videoBoxNode),
         autoStart : true,
         resolutions:{
             hdfile: data.url
         },
         sdMp4Url:'http://video.study.163.com/edu-video/nos/mp4/2014/11/26/876018_hd.mp4',
     });
 
     var top = ((jq(window).height() - 450)/2 + (jq(document).scrollTop() || 0));
     this.tpl.css({'top':top});
 
  this.bindEvent();
 }
 //定义各种方法
 vPro.bindEvent = function() {
  var that = this;
 
  $(this.closeBtnNode).click(function() {
   that.remove();
  })
 };
 
 vPro.remove = function() {
  $(this.tpl).remove();
  maskObj.removeMask();
 };
 
 vPro.show = function() {
  maskObj.show();
  $(document.body).append(this.tpl);
 };
 //最后挂到全局对象jq中去
 jq.showVideoDialog = function(data) {
  return (new VideoDialog(data)).show();
 };
 

})(jQuery, window);
```
引入该文件后，直接通过jq.showVideoDialog(data),就可以进行调用了。