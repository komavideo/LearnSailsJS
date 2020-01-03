嵌入式策略
=========

## 知识点

* 为路由绑定功能(策略)

## 实战演习

为访问的URL绑定存取日志功能。

### api/policies/accessLog.js

~~~js
module.exports = function (req, res, next) {
    console.info(req.method, req.path);
    return next();
};
~~~

### config/policies.js

~~~js
...
    '*': ['accesslog']
...
~~~

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
