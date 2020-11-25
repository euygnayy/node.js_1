
// 导入核心模块
var http = require('http');

// 创建一个服务器实际对象 对象可以调用相关方法
var app = http.createServer()

// 监听服务器端口 端口号取值范围0-65535  但是不建议使用0-1024之间的端口 原因:容易被占用
app.listen(3000, function () {
    console.log("running^");
    // http://localhost:3000/
})

// 监听客户端请求事件  
// 只要有客户端发送请求 那么该事件对应的回调函数就会自动触发
app.on("request", function (req, res) {
    // 这里用于响应客户端的请求
    res.end("hello")
})