#jQuery瀑布流插件Masonry

##**前言**

最近需要搞一个摄影大赛的活动专题，展示摄影图片的页面需要用到瀑布流的布局，介于开发时间的限制，决定直接使用较为成熟的jQuery插件Masonry。本文主要是移动端web为例子来说，因为在PC端奏效的代码，到了移动端就会有各种坑，后面我会一一说到。


---

##**插件介绍**

插件的官方API：[API](http://masonry.desandro.com/options.html "")

该插件可以实现的效果[DEMO](http://tympanus.net/Development/GridLoadingEffects/index2.html "")


---

##**实例**

下面将项目中的代码展示：

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>${"name":"title", "description":"页面title"}</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="content-style-type" content="text/css"/>
    <meta http-equiv="content-script-type" content="text/javascript"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="keywords" content='${"name":"keywords", "description":"页面关键字"}'/>
    <meta name="description" content='${"name":"description", "description":"页面描述"}'/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <link type="text/css" rel="stylesheet" href="http://study.163.com/src/css/mpage/style.css">
 
</head>
<body>
    <nav id="j-topnav" style="height: 45px; background-color:#2d3b48;" >云课堂套头</nav>
    <!-- $specialContentWrap标签表示只发布标签内的内容 -->
    <!-- $specialContentWrap -->
    <link type="text/css" rel="stylesheet" href="http://cst.stu.126.net/u/css/cms/specialWebCommonStyle.css">
    <!-- relpace-css:css/m_index.css -->
 
    
 <button class="j-reloadA">A类</button>
 <button class="j-reloadB">B类</button>
 
 <button class="j-append">添加节点</button>
 
 <div id="masonry" class="container-fluid">     
       <!-- 就是这个节点下实现瀑布流 -->
 </div>  
 

    <script type="text/javascript" src="http://cst.stu.126.net/u/js/cms/specialWebCommon.js"></script>
       
    <script type="text/javascript">
        <!-- relpace-js:js/masonry.js -->
    </script> 
    
    <script type="text/javascript">
        <!-- relpace-js:js/share.js -->
    </script>
    <script>
        <!-- relpace-js:js/m_index.js -->
    </script>   
<script type="text/javascript">
$(function() {
 
 /*模拟一开始就添加A类DIV若干*/
 function getDataA(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">1</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">2</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">3</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">4</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">5</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">6</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">7</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">8</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">9</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">10</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';  
  var $items = $(itemsStr);
     $container.append($items);
  $items.css('visibility','hidden');      
        setTimeout(function(){
         /*需要等待图片全部加载后再布局，否则会出现重叠效果*/
      $container.imagesLoaded(function() {
          $container.masonry('reloadItems');     
          $container.masonry('layout');      
          $items.css('visibility','visible');
         });                 
        },100);     
     
 }
 /*模拟获得B类数据*/
 function getDataB(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">1</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">2</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">3</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">4</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">5</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">6</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">7</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">8</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">9</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">10</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="最佳前男友">123</div>';  
  var $items = $(itemsStr); 
     $container.append($items);   
  $items.css('visibility','hidden');              
        setTimeout(function(){
         /*需要等待图片全部加载后再布局，否则会出现重叠效果*/
      $container.imagesLoaded(function() {
          $container.masonry('reloadItems');     
          $container.masonry('layout');      
          $items.css('visibility','visible');
         });                 
        },100); 
         
        
 }
 
  
 
 /*瀑布流插件配置*/
 /*API：http://masonry.desandro.com/options.html*/
    var $container = $('#masonry');
    getDataA();    
    $container.imagesLoaded(function() {
        $container.masonry({   
            itemSelector: '.box',
            gutter: 20,//间距
            isAnimated: false,
            transitionDuration: 0,//去掉初始化闪烁   
             isFitWidth: true,     //配合css中的margin：0 auto来实现居中效果
        });
    });
   
    /*往瀑布流底部添加节点*/
    function addItems(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友">123</div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';     
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="最佳前男友"></div>';  
  var $items = $(itemsStr);
  setTimeout(function(){
   $container.imagesLoaded(function(){
       $container.append($items).masonry('appended',$items);           
   });    
  },100);
    }
    
    $('.j-append').on("click",function(){
     addItems();       
    });
    /*加载B类*/
    $('.j-reloadB').on('click',function(){
     $container.empty();   
        getDataB();                 
    });  
    /*加载A类*/
    $('.j-reloadA').on('click',function(){   
     $container.empty();   
        getDataA();              
    });     
    /*判断是否滑动底部*/   
    var scrollState = true;
 $(window).bind("scroll",function () {
     if ($(document).scrollTop() + $(window).height() >= $(document).height()-100) {
      /*解决移动端scroll多次触发*/
         if(!!scrollState){
          setTimeout(function(){
               console.log("哦哦,到底了.");
               addItems();
               scrollState = true;  
          },200);
          scrollState = false;
         }                     
     }
 });
 
});
 
</script>      
    <!-- /$specialContentWrap -->
</body>
</html>
```

具体的内容我在代码中都有所批注，详细花不了几分钟就能够看懂，这就是一个典型的移动端瀑布流懒加载布局。


---

##**感悟**

相同的代码，在PC端在没有任何问题，在移动端上却好多坑，需要优化很多位置。看来移动Web的开发还是困难重重呢。




