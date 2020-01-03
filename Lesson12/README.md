路由的定制
=========

## 知识点

* 自定义控制器的URL映射

https://sailsjs.com/documentation/concepts/routes/custom-routes

## 实战演习

### api/controllers/TestController.js

~~~js
...
    //  /test/page1 -> /page1
    page1:function(req, res){
        res.send('page1');
    },
    //  /test/page2 -> /page2
    page2:function(req, res){
        res.send('page2');
    },
    //  /test/page3 -> /about/page3
    page3:function(req, res){
        res.send('page3');
    },
...
~~~

### config/routes.js

~~~js
...
    'GET /page1': 'TestController.page1',
    'GET /page2': [
        {policy: 'accessLog'},
        {controller: 'test', action: 'page2'}
    ],
    'GET /about/page3': 'TestController.page3',
...
~~~

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
