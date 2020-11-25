// 成绩处理案例
var fs = require("fs");
// 1.读取原始成绩数据 在score.txt
var data = fs.readFileSync('./score.txt', 'utf-8')
// console.log(data);

// 2.转换数据格式 把所有的等号替换为:
var str = data.replace(/=/g, ':')

// 2.1再次替换数据  把上次的结果再次替换：把空格替换为回车换行
str = str.replace(/\s/g, '\r\n')

// 3.把转换的结果写入另一个文件 writeFileSync
fs.writeFileSync('./scores2.txt', str, 'utf-8')