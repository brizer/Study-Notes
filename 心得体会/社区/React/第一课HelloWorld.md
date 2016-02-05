#Hello World 

---
##**前言**
[react官网入门教程][1]
react版本的helloworld。

---

helloworld.html
```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
<script src="build/react.js"></script>
<script src="build/JSXTransformer.js"></script>
</head>
<body>
  <div id="example"></div>
  <script type="text/jsx">
    React.render(
      <h1>Hello,world!</h1>,
      document.getElementById('example')
    );
  </script>
</body>
</html>
```

其中JSXTransformer是用来将JSX转为javascript代码的工具。[JSX语法具体内容][2]日后详解。

就可以显示hello，world了。

---

我们也可以将js文件单独列出来，src/helloworld.js:
```
    React.render(
      <h1>Hello,world!</h1>,
      document.getElementById('example')
    );
```

然后在helloworld.html中引入：
```
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
<script src="build/react.js"></script>
<script src="build/JSXTransformer.js"></script>
</head>
<body>
  <div id="example"></div>
  <script type="text/jsx" src="src/helloworld.js"></script>
</body>
</html>
```

同样可以出现helloworld。







  [1]: http://reactjs.cn/react/docs/getting-started.html
  [2]: http://reactjs.cn/react/docs/jsx-in-depth.html