#jQuery�ٲ������Masonry

##**ǰ��**

�����Ҫ��һ����Ӱ�����Ļר�⣬չʾ��ӰͼƬ��ҳ����Ҫ�õ��ٲ����Ĳ��֣����ڿ���ʱ������ƣ�����ֱ��ʹ�ý�Ϊ�����jQuery���Masonry��������Ҫ���ƶ���webΪ������˵����Ϊ��PC����Ч�Ĵ��룬�����ƶ��˾ͻ��и��ֿӣ������һ�һһ˵����


---

##**�������**

����Ĺٷ�API��[API](http://masonry.desandro.com/options.html "")

�ò������ʵ�ֵ�Ч��[DEMO](http://tympanus.net/Development/GridLoadingEffects/index2.html "")


---

##**ʵ��**

���潫��Ŀ�еĴ���չʾ��

```
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>${"name":"title", "description":"ҳ��title"}</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
    <meta http-equiv="content-style-type" content="text/css"/>
    <meta http-equiv="content-script-type" content="text/javascript"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <meta name="keywords" content='${"name":"keywords", "description":"ҳ��ؼ���"}'/>
    <meta name="description" content='${"name":"description", "description":"ҳ������"}'/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
    <meta content="yes" name="apple-mobile-web-app-capable">
    <link type="text/css" rel="stylesheet" href="http://study.163.com/src/css/mpage/style.css">
 
</head>
<body>
    <nav id="j-topnav" style="height: 45px; background-color:#2d3b48;" >�ƿ�����ͷ</nav>
    <!-- $specialContentWrap��ǩ��ʾֻ������ǩ�ڵ����� -->
    <!-- $specialContentWrap -->
    <link type="text/css" rel="stylesheet" href="http://cst.stu.126.net/u/css/cms/specialWebCommonStyle.css">
    <!-- relpace-css:css/m_index.css -->
 
    
 <button class="j-reloadA">A��</button>
 <button class="j-reloadB">B��</button>
 
 <button class="j-append">��ӽڵ�</button>
 
 <div id="masonry" class="container-fluid">     
       <!-- ��������ڵ���ʵ���ٲ��� -->
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
 
 /*ģ��һ��ʼ�����A��DIV����*/
 function getDataA(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">1</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">2</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">3</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">4</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">5</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">6</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">7</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">8</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">9</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">10</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';  
  var $items = $(itemsStr);
     $container.append($items);
  $items.css('visibility','hidden');      
        setTimeout(function(){
         /*��Ҫ�ȴ�ͼƬȫ�����غ��ٲ��֣����������ص�Ч��*/
      $container.imagesLoaded(function() {
          $container.masonry('reloadItems');     
          $container.masonry('layout');      
          $items.css('visibility','visible');
         });                 
        },100);     
     
 }
 /*ģ����B������*/
 function getDataB(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">1</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">2</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">3</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">4</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">5</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">6</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">7</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">8</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">9</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">10</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/A357DDE2479B6E521AB225E5C41AE864.jpg" alt="���ǰ����">123</div>';  
  var $items = $(itemsStr); 
     $container.append($items);   
  $items.css('visibility','hidden');              
        setTimeout(function(){
         /*��Ҫ�ȴ�ͼƬȫ�����غ��ٲ��֣����������ص�Ч��*/
      $container.imagesLoaded(function() {
          $container.masonry('reloadItems');     
          $container.masonry('layout');      
          $items.css('visibility','visible');
         });                 
        },100); 
         
        
 }
 
  
 
 /*�ٲ����������*/
 /*API��http://masonry.desandro.com/options.html*/
    var $container = $('#masonry');
    getDataA();    
    $container.imagesLoaded(function() {
        $container.masonry({   
            itemSelector: '.box',
            gutter: 20,//���
            isAnimated: false,
            transitionDuration: 0,//ȥ����ʼ����˸   
             isFitWidth: true,     //���css�е�margin��0 auto��ʵ�־���Ч��
        });
    });
   
    /*���ٲ����ײ���ӽڵ�*/
    function addItems(){
     var itemsStr = '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����">123</div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';     
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';
     itemsStr += '<div class="box"><img src="http://test-edu-image.nos.netease.com/C78B1A6F4119C4855A4B66B3D199551F.jpg" alt="���ǰ����"></div>';  
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
    /*����B��*/
    $('.j-reloadB').on('click',function(){
     $container.empty();   
        getDataB();                 
    });  
    /*����A��*/
    $('.j-reloadA').on('click',function(){   
     $container.empty();   
        getDataA();              
    });     
    /*�ж��Ƿ񻬶��ײ�*/   
    var scrollState = true;
 $(window).bind("scroll",function () {
     if ($(document).scrollTop() + $(window).height() >= $(document).height()-100) {
      /*����ƶ���scroll��δ���*/
         if(!!scrollState){
          setTimeout(function(){
               console.log("ŶŶ,������.");
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

������������ڴ����ж�������ע����ϸ�����˼����Ӿ��ܹ������������һ�����͵��ƶ����ٲ��������ز��֡�


---

##**����**

��ͬ�Ĵ��룬��PC����û���κ����⣬���ƶ�����ȴ�ö�ӣ���Ҫ�Ż��ܶ�λ�á������ƶ�Web�Ŀ����������������ء�




