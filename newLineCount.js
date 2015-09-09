var fs = require('fs'); //require filesystem module

var str = fs.readFileSync(process.argv[2],'utf-8'); //read contents of file and return as string

// console.log(fs.readFileSync(process.argv[2],'utf-8'));

console.log(str.match(/\n/g).length);

