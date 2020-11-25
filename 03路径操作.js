// 路径操作专门用于路径的拼接操作
// 优化02文件路径问题.js
var fs = require('fs');
var path = require('path');

// path.sep用法
// var data = fs.readFileSync(__dirname + path.sep + 'test.txt', 'utf8')
// console.log(data);





// path.join用法    ../表示上一层路径
// path.join方法作用 拼接路径并对路径进行规范化处理
// __dirname是当前文件的路径 但是不包括当前文件

// var p = path.join(__dirname,'./test.txt')
// 返回的是:   
//         d:\3a前端\12.Node.js\Node.js.day1\test.txt

// var p = path.join(__dirname,'abc','./test.txt')
// 返回的是:
//      d:\3a前端\12.Node.js\Node.js.day1\abc\test.txt
// 在当前目录的前面加上了abc和text.txt

var p = path.join(__dirname,'abc','./test.txt')

console.log(p);










// 寻找上上一层路径里的new_test.txt里的内容 利用path.join
// __dirname是当前文件！！！！ 
// var p = path.join(__dirname,'../new_test.txt');
// var data = fs.readFileSync(p,'utf8');
// console.log(data);


