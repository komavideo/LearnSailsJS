进程监视
=======

Sails在运行时难免出现错误，这样会使node.js的进程崩溃，从而导致强制停止服务，那么我们就需要一种手段来监视node.js进程的运行，当进程出现错误崩溃时帮我们写入日志LOG，同时重新启动进程，保证服务的运行。

## 知识点

* Sails.js生产环境部署时的进程监视设置

## 实战演习

### 进程管理工具：pm2

http://pm2.keymetrics.io/

~~~bash
$ sudo npm install pm2 -g
$ sails lift
$ pm2 start app.js
$ pm2 list
$ pm2 stop 0
$ pm2 restart 0
$ pm2 delete 0
~~~

### 编写部署文件

~~~bash
$ nano server-pm2.json
...
{
    "name": "myweb",
    "script": "app.js",
    "port": 8080,
    "env": {
        "NODE_ENV": "production"
    },
    "options": [""]
}
...
$ pm2 start server-pm2.json
~~~

## 课程文件

https://github.com/komavideo/LearnSailsJS

## 小马视频频道

http://komavideo.com
