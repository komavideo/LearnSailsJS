开发必备(nodemon)
================

在我们开发sails应用程序时，如果每一次修改源代码后都要通过【sails lift】命令重新启动服务的话会非常的麻烦，那么通过nodemon工具的话，我们就可以非常简单地完成自动启动服务。

## 知识点

* 开发必备工具nodemon

## 实战演习

### nodemon

http://nodemon.io/

~~~bash
$ sudo npm install nodemon -g
~~~

### package.json

~~~json
...
    "scripts": {
        "debug": "node debug app.js",
        "start": "nodemon app.js"
    },
...
~~~

### 启动

~~~bash
$ npm start
~~~

修改文件确认动作。

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
