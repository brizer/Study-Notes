#**puerʹ���ֲ�**


---


##**ǰ��**

puer�����׵�ͬ��д��һ��ʵʱˢ�¡����ص��Խӿڡ��ƶ��˵��Լ���һ��Ĺ��ߡ�������Ҫ��ʵ��˵˵�����ʹ�á�

---

##**��װ**

��װ���̺ܼ򵥣�ֱ��ͨ��npm��װȫ��puer��

```
npm install puer -g
```

ͨ��puer -h�����鿴����������˵����װ�ɹ���

---

##**ʵʱˢ��**

puer������Ĺ��ܣ�ֱ��ȴ���������ļ����£�ִ��puer����ɣ�

```
cd /path/to/workspace 
puer 
```

puer��Ĭ�ϴ�һ��8000�˿ڵ�ҳ�棬��Ȼ���˿ڿ���ͨ�� -p 8001�����ĸ�ʽ�����ơ�

�༭��ǰ·���µ��ļ�����**ʵʱ����ҳ��**��


---

##**���ص��Խӿ�**


����һ�㶼��ǰ��˷�������������˸�������ӿڣ�ǰ�˸��𽫽ӿڻ�ȡ���������ƴ��չʾ�ͽ�����

������ʱ���˵Ľӿ�û�г���������˵�����������ֱ�ӵ��ã����Ǿͻ��ڱ��ش���ģ��������������
�޷Ǿ���д�ڴ����У�Ȼ��������ʱ��ȥ�޸ġ�

�����ɱ��е�����ǿ���ͨ��puer���ڱ���ģ��ajax�������ݸ�ʽ��

###**GET**

�����ڹ���Ŀ¼�½�һ��route.js�ļ����������£�

```
// use addon to mock http request
module.exports = {
  // GET
  "GET /v1/posts/:id": function(req, res, next){
	// response json format
    res.send({
      name: "liufang",
      age: "24"
    })
  },
  // PUT POST DELETE is the same
  "PUT /v1/posts/:id": function(){
  },
  "POST /v1/posts": function(){
  },
  "DELETE /v1/posts/:id": function(){
  }
}
```

����ͨ��

```
puer -r route.js
```

������puer��

![images](./images/1.jpg "")

����localhost:8000/v1/posts/2,Ч�����£�


![images](./images/1-2.jpg "")

���Կ����ɹ���ȡGET���ݡ�

###**POST**

post��ʵ��getһ���ģ������޸���route.js��

```
// use addon to mock http request
module.exports = {
  // GET
  "GET /v1/posts/:id": function(req, res, next){
	// response json format
    res.send({
      name: "liufang",
      age: "24"
    })
  },
  // PUT POST DELETE is the same
  "PUT /v1/posts/": function(){
  },
  "POST /v1/posts/getData": function(req,res,next){
    res.send({
      name:"lf",
      age:24
    })
  },
  "DELETE /v1/posts/:id": function(){
  }
}
```

Ȼ����index.html��ajax����
```

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<h1>hello lf</h1>
<div class="j-name"></div>
<div class="j-age"></div>
<script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
	$.ajax({
		url:'/v1/posts/getData',
		method:'post'
	}).done(function(data){
		var res =data;
		$('.j-name').html(res.name);//lf
		$('.j-age').html(res.age);  //24
	});
</script>
</body>
</html>
```

ֱ�ӷ���localhost:8000/index.html
Ч�����£�



![images](./images/1-3.jpg "")



---

##**�ƶ��˵���**

puer������weinre������������ʱ����puer -i������Ȼ���������ö˷�����վ(��ס��ͬһ����)��Ȼ����Weinre���ɣ�

![images](./images/1-4.jpg "")


�����Ϳ�����PC���ϵ����ƶ�ҳ���ˡ����ｨ��ʹ��chrome������ޡ�

---

##**�ο�**

�ο�[���ߵĲ���](http://leeluolee.github.io/2014/10/24/use-puer-helpus-developer-frontend/ "")��













