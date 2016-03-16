# jQuery异步编程之when用法

---

##**前言**

我们有时候会有一些需求就是某些异步操作比如ajax完成后再执行某些操作。一般我们可以通过ajax方法的done方法来回调。但是如果是多个ajax呢？

---

以一个实例来说明：

```			
$.when($.ajax({
	url:"http://study.163.com/cps/personal/info.htm",   
	method:"GET",
	data:''
}),$.ajax({
	url:"http://study.163.com/cps/personal/courseCard.htm",
	method:"GET",
	data:{"productType":30,"ids":$list_1.data("ids")}   
}),$.ajax({
	url:"http://study.163.com/cps/personal/courseCard.htm",
	method:"GET",
	data:{"productType":0,"ids":$list_2.data("ids")}
}))
	.done(function(d1,d2,d3){
		personInfo = JSON.parse(d1[0]);
		initData();
		cardsInfo = JSON.parse(d2[0]);     
		initYoocCards(cardsInfo);
		studyCardsInfo = JSON.parse(d3[0]);
		initStudyCards(studyCardsInfo);	    			
		initEvents()
	}); 
```

可以看到，我们通过在when中注册多个ajax，然后done后再执行后续操作。
其中的d1,d2,d3分别是3个ajax的返回结果。我们去d1[0]的原因是它才是最后的数据集合，d1[1]则是success的状态值。




