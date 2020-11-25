var fs = require('fs')
var path = require('path')


var p = path.join(__dirname,'data','data.txt')
var a = path.join(__dirname, '../abc/d.txt')


var h = fs.readFileSync(p,'utf8');
var w = fs.readFileSync(a,'utf8');

console.log(h+w);

