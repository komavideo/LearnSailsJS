数据库的设置(MongoDB)
===================

## 知识点

* 采用MongoDB构建模型

## 实战演习

~~~bash
# MongoDB驱动程序的安装
$ npm install sails-mongo@0.12.3 --save --save-exact
# 数据库连接
$ nano config/connections.js
...
    mydb: {
        adapter: 'sails-mongo',
        host: '127.0.0.1',
        port: 27017,
        //user: 'username', //optional
        //password: 'password', //optional
        database: 'mydb'
    },
...
# 模型设置
$ nano config/models.js
...
module.exports.models = {
    connection: 'mydb',
};
...
~~~

## 动作确认

* 浏览器
* mongo确认

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
