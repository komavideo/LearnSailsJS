做个API服务
==========

## 知识点

* 利用sails.js做个API服务

## 实战演习

~~~bash
$ sails generate api User
~~~

## 生成文件

### api/controllers/UserController.js

~~~js
//默认API，无需编码
~~~

### api/models/User.js

~~~js
    attributes: {
        username: {
            type: 'string'
        },
        address: {
            type: 'string'
        }
    }
~~~

## API使用

### Sails蓝图

* GET /user -> UserController.find
* GET /user/:id -> UserController.findOne
* POST /user -> UserController.create
* PUT /user/:id -> UserController.update
* DELETE /user/:id -> UserController.destroy

~~~
http://127.0.0.1:1337/user
http://127.0.0.1:1337/user/create?username=koma&address=china
http://127.0.0.1:1337/user/create?username=mike&address=usa
http://127.0.0.1:1337/user/1
~~~

### POSTMAN测试（下期再讲）

* 数据删除
* 数据更新

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
