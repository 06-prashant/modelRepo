const pras=require("./my2");
const os= require('os');
const fs=require('fs');
// const file=require("./file");
// console.log(pras);
// document.getElementById("p1").innerHTML="HelloV";

// console.log(exports, require, module, __filename, __dirname);
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.release());
// console.log(os.platform());

// fs.readFile('file.txt', 'utf8', (err, text)=>{
//     console.log(err, text)
// })


const d= fs.readFileSync('file.txt')
console.log(d.toString());
document.getElementById("p1").innerHTML=d.toString();