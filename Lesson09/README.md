数据更新删除
===========

## 知识点

用POSTMAN测试API的功能

* 数据更新
* 数据删除

## 实战演习

### 用户确认

~~~
http://127.0.0.1:1337/user
~~~

## 蓝图

* GET /user -> UserController.find
* GET /user/:id -> UserController.findOne
* POST /user -> UserController.create
* PUT /user/:id -> UserController.update
* DELETE /user/:id -> UserController.destroy

### 数据更新

* PUT /user/:id -> UserController.update

### 数据删除

* DELETE /user/:id -> UserController.destroy

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
