#AngularJS֮XHR����

---

##**ǰ��**

��AngularJS�н��з�������ͨ�ŵķ�ʽ�кܶ࣬����ʹ�����÷���$http����$resource��Ҳ����ʹ����Restangular�ȿ⡣

��������ֻ˵˵$http�����������ӵ����ݵ��պ���ʹ��������һһ���ϡ�

---

##**ʹ��$http**

$http����ֻ�Ǽ򵥵ķ�װ�������ԭ����XMLHttpRequest����

$http������ֻ�ܽ���һ�������ĺ��������������һ�����󣬰�����**��������HTTP�������������**���������**����һ��promise���󣬾���success��error��������**��

�������������ʹ�ó�����

![images](./images/15-1.png)

���Ǹ�$http�д���Ĳ���һ���򵥵Ļص��������������**ʵ���Ϸ�����һ��promise����**����promise���󷵻غ����ǿ��Խ�����ʽ�ĵ��á�

![images](./images/15-2.png)

![images](./images/15-3.png)


###**����**

�������м���
```
params:{'name':'liufang'}
```

�����ĸ�ʽ���ɡ�

����Ǵ������ݣ���ʹ��data���ԣ�


![images](./images/15-5.png)


###**apply**

���ǵ���http����������һ��$digestѭ������֮ǰ�������ᱻ����ִ�С����������Ҫǿ��digestѭ��ִ�У����Խ�http����apply��

![images](./images/15-4.png)


---

##**��ݷ���**

�ͺ�jquery��ajax����һ����httpҲ���Լ��Ŀ�ݷ�������get��post�ȡ�

����Ŀ��Բ���[API](http://docs.angularjs.cn/api/ng/service/$http "")

����ֻ��jsonp��һ�����ӣ�

```
$http.jsonp("api/users.json?callback=JSON_CALLBACKA");
```

---

##**����HTTP����**


Ĭ���ǲ�����ģ����ǿ����ֶ�����cache����Ϊtrue��

![images](./images/15-6.png)

---

##**$httpProvider**


###**������**

�������͸�������֮ǰ���ߴӷ���������ʱ����������ء����������֤�ȳ��������������ǱȽϺõ��ֶΡ�


����������һ�����ӣ�

![images](./images/15-7.png)


�ȴ���һ�������������ٵ�$httpProvider��ע�᣺

![images](./images/15-8.png)


###**HTTPͷ**

���ǿ����������HTTPͷ��

![images](./images/15-9.png)

����Ҳ��Ҳֻ��POST���߱�����͵�����������ã�

![images](./images/15-10.png)


---

##**����**

ֻ��˵�����������$http,��jquery�е�ajax��࣬�ܻ�����









