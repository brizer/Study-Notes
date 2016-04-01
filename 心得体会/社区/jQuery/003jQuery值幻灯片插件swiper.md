#**jQuery֮�õ�Ƭ���swiper**


---

##**ǰ��**

�ר��ҳ��Ҫһ���ƶ��˺�PC�˾����ݵĻõ�Ƭ�������ʹ��swiper�����ļ�˵�¸������ʹ�ã���ϸ�Ļ��ÿ�API��

---

##**����**

[����](http://www.swiper.com.cn/ "")


[Ч����ʾ](http://www.swiper.com.cn/demo/index.html "")

�������Ч����ʵ�ַ�����ȥgithub����Ӣ�İ��swiper�����ġ�

[API](http://www.swiper.com.cn/api/index.html "")

---

##**ʹ�÷���**

��������jquery

�����������Ӧ��css��js��

![images](./images/3-1.jpg "")


��ͨ�л���


```
	<!--��ͨ�л�-->
    <div class="swiper-container">    
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../images/1.jpg" alt="���ǰ����"></div>
            <div class="swiper-slide"><img src="../images/2.jpg" alt="��ǧ��"></div>
            <div class="swiper-slide"><img src="../images/3.jpg" alt="��������"></div>
            <div class="swiper-slide"><img src="../images/4.jpg" alt="��ȮС��"></div>    
        </div>  
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>

```

��Ӧjs��

```
    /*��ͨ�л�*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30
    });

```

Ч�����£�


![images](./images/3-2.jpg "")




���ܸ�����������Ч������3D��ת�������忨Ƭ�ȣ���ֱ�ӿ�������


---

##**�ƶ���ʹ�÷���**

###**һ��һͼ**


һ��һͼ��ÿ�λ�������һ��ͼ��

�����������Ӧ�ļ���Ȼ��������£�

```
<div class="swiper-container swiper-container-horizontal">
		<div class="swiper-wrapper">
			<div class="swiper-slide swiper-slide-active" style="width:500px;"><img src="../images/1.jpg" alt="���ǰ����"></div>   
			<div class="swiper-slide swiper-slide-next" style="width:500px;"><img src="../images/2.jpg" alt="���ǰ����"></div>
			<div class="swiper-slide" style="width: 500px;"><img src="../images/3.jpg" alt="���ǰ����"></div>
			<div class="swiper-slide" style="width: 500px;"><img src="../images/4.jpg" alt="���ǰ����"></div>
		</div>
	</div>
```

��Ӧjs��

```
var swiper = new Swiper('.swiper-container');
```


###**һ����ͼ**

Ч�����£�

![images](./images/3-3.jpg "")

�������Ӧ�ļ����������£�

```
	<h1>һ����ͼ������ʾ</h1>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide">Slide 1</div>
			<div class="swiper-slide">Slide 2</div>
			<div class="swiper-slide">Slide 3</div>
			<div class="swiper-slide">Slide 4</div>
			<div class="swiper-slide">Slide 5</div>
			<div class="swiper-slide">Slide 6</div>
			<div class="swiper-slide">Slide 7</div>
			<div class="swiper-slide">Slide 8</div>
			<div class="swiper-slide">Slide 9</div>
			<div class="swiper-slide">Slide 10</div>
		</div>
		 
		<div class="swiper-pagination"></div>
	</div>
```

Js��

```
    /*һ����ͼ������ʾ*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 2,     //ÿ����ʾ����ͼƬ
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30              
    });

```

---

##**����**

jQuery�����Ȧ�ǳ��ḻ�����뿴React�ķ�չ�պ�һ��Ҳ��ܺá�





