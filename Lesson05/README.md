第一个控制器
============

## 知识点

* 我的第一个Sails控制器

## 实战演习

```js
$ sails generate controller test
$ nano api/controllers/TestController.js
...
    go: function(req, res){
        res.ok();            //200
        //res.forbidden();   //403
        //res.notFound();    //404
        //res.serverError(); //500
    }
...
```

## 文件结构

* api/controllers
  + TestController.js
* api/responses
  + forbidden.js
  + notFound.js
  + ok.js
  + serverError.js

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
