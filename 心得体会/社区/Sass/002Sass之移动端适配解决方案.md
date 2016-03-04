# Sass之移动端适配解决方案

---
##**前言**

最近涉足移动端Web开发，在适配各个机型的过程中遇到了一些麻烦，于是整理移动Web开发适配解决方案。

---

##**思路**

首先我们需要使用sass，确切地说是scss，两者的区别在于前者是缩减来控制，而后者是传统的大括号控制法。

我们的思路就是通过媒介查询来对不同大小的屏幕设置不同的font-size,然后其他的所有需要px的地方全部通过自定义sass函数来解决。

---

##**具体实现**

定义rem函数如下：
```
$brower-default-font-size:20px !default;
@function rem($px) {
    @return $px / $brower-default-font-size * 1rem;
} 
```
这里取20px,是因为移动端Web的视觉稿默认是640px宽度的。

然后各个屏幕适配根字体大小如下：
```
   @media only screen and (max-width: 1080px),
   only screen and (max-device-width:1080px) {
    html,
    body {
        font-size: 33.75px;
    }
   }

   @media only screen and (max-width: 960px),
   only screen and (max-device-width:960px) {
    html,
    body {
        font-size: 30px;
    }
   }

   @media only screen and (max-width: 800px),
   only screen and (max-device-width:800px) {
    html,
    body {
        font-size: 25px;
    }
   }

   @media only screen and (max-width: 720px),
   only screen and (max-device-width:720px) {
    html,
    body {
        font-size: 22.5px;
    }
   }

   @media only screen and (max-width: 640px),
   only screen and (max-device-width:640px) {
    html,
    body {
        font-size: 20px;
    }
   }

   @media only screen and (max-width: 600px),
   only screen and (max-device-width:600px) {
    html,
    body {
        font-size: 18.75px;
    }
   }

   @media only screen and (max-width: 540px),
   only screen and (max-device-width:540px) {
    html,
    body {
        font-size: 16.875px;
    }
   }

   @media only screen and (max-width: 480px),
   only screen and (max-device-width:480px) {
    html,
    body {
        font-size: 15px;
    }
   }

   @media only screen and (max-width: 414px),
   only screen and (max-device-width:414px) {
    html,
    body {
        font-size: 12.9375px;
    }
   }

   @media only screen and (max-width: 400px),
   only screen and (max-device-width:400px) {
    html,
    body {
        font-size: 12.5px;
    }
   }

   @media only screen and (max-width: 375px),
   only screen and (max-device-width:375px) {
    html,
    body {
        font-size: 11.71875px;
    }
   }

   @media only screen and (max-width: 360px),
   only screen and (max-device-width:360px) {
    html,
    body {
        font-size: 11.25px;
    }
   }

   @media only screen and (max-width: 320px),
   only screen and (max-device-width:320px) {
    html,
    body {
        font-size: 10px;
    }
   }     

   @media only screen and (max-width: 240px),
   only screen and (max-device-width:240px) {
    html,
    body {
        font-size: 7.5px;
    }
   }
```

只需将以上内容定义为一个scss文件，比如_mobileRem.scss。然后在其他scss文件中通过@import引入即可：

```
@import "common/_mobileRem"; 
```

当然不要忘了文件路径。

最后在使用的时候只需要将通过设计稿测量出来的px当做rem函数的参数即可：
```
.m-FAB-banner {  
    padding-top:rem(50px);
    padding-bottom:rem(130px);   
    text-align:center;
    font-size: rem(26px);    
    line-height: rem(42px);      
    background: url(http://nos.netease.com/edu-image/57D6BC0DCE688F64B512C6D2A6D0C4E1.jpg) 100% 100% no-repeat;
    background-size:100% 100%;     
    p {
        padding:rem(30px) rem(20px) 0 rem(20px);       
        color:#fff;  
    } 
}  
```

---

##**注意事项**

这里需要注意一点的是，即使是通过rem来管理单位，width属性还是不能完全适配。这里width、padding-left等水平方向上的单位必须通过测量的px/640px的百分比来进行布局，否则后果不堪设想。

---

##**感悟**

做了几天移动端Web适配的工作，感觉移动端确实好麻烦，即使DOM元素比PC端少很多，但是适配各个机型确实相当麻烦。想起老师一句话，css是一笔一笔画出来的。唉，真的是这个样子。


最后放上完整的_mobileRem.scss文件内容：
```
$brower-default-font-size:20px !default;
@function rem($px) {
    @return $px / $brower-default-font-size * 1rem;
}  
   @media only screen and (max-width: 1080px),
   only screen and (max-device-width:1080px) {
    html,
    body {
        font-size: 33.75px;
    }
   }

   @media only screen and (max-width: 960px),
   only screen and (max-device-width:960px) {
    html,
    body {
        font-size: 30px;
    }
   }

   @media only screen and (max-width: 800px),
   only screen and (max-device-width:800px) {
    html,
    body {
        font-size: 25px;
    }
   }

   @media only screen and (max-width: 720px),
   only screen and (max-device-width:720px) {
    html,
    body {
        font-size: 22.5px;
    }
   }

   @media only screen and (max-width: 640px),
   only screen and (max-device-width:640px) {
    html,
    body {
        font-size: 20px;
    }
   }

   @media only screen and (max-width: 600px),
   only screen and (max-device-width:600px) {
    html,
    body {
        font-size: 18.75px;
    }
   }

   @media only screen and (max-width: 540px),
   only screen and (max-device-width:540px) {
    html,
    body {
        font-size: 16.875px;
    }
   }

   @media only screen and (max-width: 480px),
   only screen and (max-device-width:480px) {
    html,
    body {
        font-size: 15px;
    }
   }

   @media only screen and (max-width: 414px),
   only screen and (max-device-width:414px) {
    html,
    body {
        font-size: 12.9375px;
    }
   }

   @media only screen and (max-width: 400px),
   only screen and (max-device-width:400px) {
    html,
    body {
        font-size: 12.5px;
    }
   }

   @media only screen and (max-width: 375px),
   only screen and (max-device-width:375px) {
    html,
    body {
        font-size: 11.71875px;
    }
   }

   @media only screen and (max-width: 360px),
   only screen and (max-device-width:360px) {
    html,
    body {
        font-size: 11.25px;
    }
   }

   @media only screen and (max-width: 320px),
   only screen and (max-device-width:320px) {
    html,
    body {
        font-size: 10px;
    }
   }     

   @media only screen and (max-width: 240px),
   only screen and (max-device-width:240px) {
    html,
    body {
        font-size: 7.5px;
    }
   }
```

