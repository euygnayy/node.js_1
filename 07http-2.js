
// 导入核心模块
var http = require('http');
var fs = require('fs')
var path = require('path')

// 创建一个服务器实际对象 对象可以调用相关方法
var app = http.createServer()

// 监听服务器端口 端口号取值范围0-65535  但是不建议使用0-1024之间的端口 原因:容易被占用
app.listen(3000, function () {
    console.log("running...");
    // http://localhost:3000/
})

// 监听客户端请求事件  
// 只要有客户端发送请求 那么该事件对应的回调函数就会自动触发
app.on("request", function (req, res) {
    // 表示客户端请求的路径  请求得到的是端口后的路径
    // console.log(req.url);

    // 表示客户端发送请求的方式get/post
    // console.log(req.method);


    // 这里用于响应客户端的请求
    // res.end("hello")

    if (req.url === '/api/getbooks' && req.method === 'GET') {
        res.end('getbooks')
    } else if (req.url === '/api/addbook' && req.method === 'POST') {
        res.end('addbook')
    } else if (req.url === '/api/users' && req.method === 'GET') {
        // 读文件
        fs.readFile(path.join(__dirname, './data.txt'), 'utf-8', function (err, data) {
            if (err) {
                // 返回异常数据
                res.end('服务器错误')
                return
            }
            // 返回正常数据
            res.end(data)
        })
    } else {
        res.end('404')
    }
})

