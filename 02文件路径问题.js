var fs = require('fs')
// var data = fs.readFileSync('./test.txt', 'utf8')
// console.log(data);

// 在window中 文件的分隔符是右斜杆   \ 
// 在Linux中 文件的路径分隔符是右斜杆 /
var data = fs.readFileSync(__dirname + '\\test.txt', 'utf8')
console.log(data);
