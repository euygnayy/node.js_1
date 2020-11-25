var fs = require('fs');
var path = require('path');

// 准备好相关的文件地址
var clockhtml = path.join(__dirname,'./clock.html');
var css = path.join(__dirname,'./clock.css');
var js = path.join(__dirname,'./clock.js');
var resultHtml = path.join(__dirname,'./result.html');

// 1.获取原始clock.html文件内容
var html = fs.readFileSync(clockhtml,'utf-8');

// 2、抽取相关的代码 正则表达式
var regStyle = /<style>([\s\S]*)<\/style>/;
var regScript = /<style>([\s\S]*)<\/style>/;
var retStyle = regStyle.exec(html);
var retScript = regScript.exec(html);

// 3、把代码写入对应的文件
fs.writeFileSync (css, retStyle[1], 'utf-8');
fs.writeFileSync (js, retStyle[1], 'utf-8');


// 4、将原始代码替换成链接
html = html.replace(retStyle[0],'<link rel="stylesheet" href="./clock.css" />');
html = html.replace(retScript[0],'<link rel="stylesheet" href="./clock.js" />');


// 5、把替换好的页面写入文件
fs.writeFileSync(resultHtml, html, 'utf-8')

