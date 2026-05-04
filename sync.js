const fs = require('fs');
const https = require("https");

var a = 80;
var b = 20;

console.log('Sync File.....');

https.get("https://dummyjson.com/products/1", (res) =>{
    console.log("fetch data successfull...");
    return res;
});

setTimeout(() => {
    console.log('setTimeout function executed...');
}, 5000);

fs.readFileSync('./test.txt', 'utf8', (err, data)=>{
    console.log("file data: ", data);
});

function addFunc(a,b){
    return a + b;
}

const result = addFunc(a,b);
console.log('Added to number: ',result);
