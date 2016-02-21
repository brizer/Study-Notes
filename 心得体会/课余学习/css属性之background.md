# css属性之background



---

##**前言**

background是一个比较常用的css属性，之前一直没有完全的学习细节，今天来整理一下。

---

##**background**

是一个组合属性，可以在其中设置所有的背景属性：
```
body
  { 
  background: #00FF00 url(bgimage.gif) no-repeat fixed top;
  }

```

可以设置如下属性：

background-color
background-position
background-size
background-repeat
background-origin
background-clip
background-attachment
background-image

如果不设置其中的某个值，也不会出现问题。
我们先看[一个例子][1]。

下面我们看看每个属性的用法。

---

##**background-color**

顾名思义，是用来设置背景颜色的。
```
body
  {
  background-color:yellow;
  }
h1
  {
  background-color:#00ff00;
  }
p
  {
  background-color:rgb(255,0,255);
  }

```
设置颜色时可以尽量使用[网络安全色][2]。

---

##**background-position**

设置背景图片的起始位置。

<table>
<tbody><tr>
<th>值</th>
<th>描述</th>
</tr>

<tr>
<td>
<ul>
<li>top left</li>
<li>top center</li>
<li>top right</li>
<li>center left</li>
<li>center center</li>
<li>center right</li>
<li>bottom left</li>
<li>bottom center</li>
<li>bottom right</li>
</ul>
</td>
<td>
<p>如果您仅规定了一个关键词，那么第二个值将是"center"。</p>
<p>默认值：0% 0%。</p>
</td>
</tr>

<tr>
<td>x% y%</td>
<td>
<p>第一个值是水平位置，第二个值是垂直位置。</p>
<p>左上角是 0% 0%。右下角是 100% 100%。</p>
<p>如果您仅规定了一个值，另一个值将是 50%。</p>
</td>
</tr>

<tr>
<td>xpos ypos</td>
<td>
<p>第一个值是水平位置，第二个值是垂直位置。</p>
<p>左上角是 0 0。单位是像素 (0px 0px) 或任何其他的 CSS 单位。</p>
<p>如果您仅规定了一个值，另一个值将是50%。</p>
<p>您可以混合使用 % 和 position 值。</p>
</td>
</tr>
</tbody></table>

我们看看[利用像素定义背景图片位置的demo][3]。从左上角开始算起。

---

##**background-size**

规定背景图片的尺寸：
```
div
{
  background:url(img_flwr.gif);
  background-size:80px 60px;
  background-repeat:no-repeat;
}
```

语法：
```
background-size: length|percentage|cover|contain;
```

<table class="dataintable">
<tbody><tr>
<th style="width:25%;">值</th>
<th>描述</th>
<th style="width:8%;">测试</th>
</tr>

<tr>
<td><i>length</i></td>
<td>
	<p>设置背景图像的高度和宽度。</p>
	<p>第一个值设置宽度，第二个值设置高度。</p>
	<p>如果只设置一个值，则第二个值会被设置为 "auto"。</p>
</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-size">测试</a></td>
</tr>

<tr>
<td><i>percentage</i></td>
<td>
	<p>以父元素的百分比来设置背景图像的宽度和高度。</p>
	<p>第一个值设置宽度，第二个值设置高度。</p>
	<p>如果只设置一个值，则第二个值会被设置为 "auto"。</p>
</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-size&amp;p=5">测试</a></td>
</tr>

<tr>
<td>cover</td>
<td>
	<p>把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。</p>
	<p>背景图像的某些部分也许无法显示在背景定位区域中。</p>
</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-size&amp;p=7">测试</a></td>
</tr>

<tr>
<td>contain</td>
<td>把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-size&amp;p=8">测试</a></td>
</tr>
</tbody></table>

可以看看[对应demo][4]

---

##**background-repeat**

设置如何重复背景图像。
```
body
  {
  background-image: url(stars.gif);
  background-repeat: repeat-y;
  }
  
```

<table>
<tbody><tr>
<th>值</th>
<th>描述</th>
</tr>

<tr>
<td>repeat</td>
<td>默认。背景图像将在垂直方向和水平方向重复。</td>
</tr>

<tr>
<td>repeat-x</td>
<td>背景图像将在水平方向重复。</td>
</tr>

<tr>
<td>repeat-y</td>
<td>背景图像将在垂直方向重复。</td>
</tr>

<tr>
<td>no-repeat</td>
<td>背景图像将仅显示一次。</td>
</tr>

<tr>
<td>inherit</td>
<td>规定应该从父元素继承 background-repeat 属性的设置。</td>
</tr>
</tbody></table>

[对应demo][5]

通常no-repeat也就是背景图片仅显示一次，比较常用。

---

##**background-origin**

该属性规定background-position属性相对于什么位置来定位。这是一个css3属性。

<table class="dataintable">
<tbody><tr>
<th style="width:25%;">值</th>
<th>描述</th>
<th style="width:8%;">测试</th>
</tr>

<tr>
<td>padding-box</td>
<td>默认值，背景图像相对于内边距框来定位。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-origin">测试</a></td>
</tr>

<tr>
<td>border-box</td>
<td>背景图像相对于边框盒来定位。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-origin&amp;p=2">测试</a></td>
</tr>

<tr>
<td>content-box</td>
<td>背景图像相对于内容框来定位。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-origin&amp;p=3">测试</a></td>
</tr>
</tbody></table>


---

##**background-clip**

该属性规定背景的绘制区域，这是一个css3属性。

<table class="dataintable">
<tbody><tr>
<th style="width:25%;">值</th>
<th>描述</th>
<th style="width:8%;">测试</th>
</tr>

<tr>
<td>border-box</td>
<td>默认值，背景被裁剪到边框盒。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-clip">测试</a></td>
</tr>

<tr>
<td>padding-box</td>
<td>背景被裁剪到内边距框。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-clip&amp;p=2">测试</a></td>
</tr>

<tr>
<td>content-box</td>
<td>背景被裁剪到内容框。</td>
<td><a target="_blank" href="/tiy/c.asp?f=css_background-clip&amp;p=3">测试</a></td>
</tr>
</tbody></table>

[相关demo][6]


---

##**background-attachment**

该属性设置背景图像是否固定或者随着页面的其余部分滚动。

<table class="dataintable">
<tbody><tr>
<th>值</th>
<th>描述</th>
</tr>

<tr>
<td>scroll</td>
<td>默认值。背景图像会随着页面其余部分的滚动而移动。</td>
</tr>

<tr>
<td>fixed</td>
<td>当页面的其余部分滚动时，背景图像不会移动。</td>
</tr>

<tr>
<td>inherit</td>
<td>规定应该从父元素继承 background-attachment 属性的设置。</td>
</tr>
</tbody></table>

---

##**background-image**

该属性为元素设置背景图像。
```
body {background-image:url(/i/eg_bg_04.gif);}
```


  [1]: http://www.w3school.com.cn/tiy/t.asp?f=csse_background
  [2]: http://www.w3school.com.cn/cssref/css_colors.asp
  [3]: http://www.w3school.com.cn/tiy/t.asp?f=csse_background-position_pixel
  [4]: http://www.w3school.com.cn/cssref/pr_background-size.asp
  [5]: http://www.w3school.com.cn/cssref/pr_background-repeat.asp
  [6]: http://www.w3school.com.cn/tiy/t.asp?f=css3_background-clip