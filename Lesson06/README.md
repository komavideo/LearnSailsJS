显示我的网页
===========

## 知识点

* 建立自己的网页
* 建立自己的布局

## 实战演习

### views/about.ejs

~~~html
<h1>About Page</h1>
<a href="http://komavideo.com" class="btn btn-primary">小马视频主页</a>
~~~

### views/b4layout.ejs

~~~html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Bootstrap 4 Layout</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  </head>
  <body>

    <%- body %>

  </body>
</html>
~~~

### api/controllers/TestController.js

~~~js
    about: function(req, res){
        res.view('about', {
            layout: 'b4layout'
        });
    }
~~~

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
