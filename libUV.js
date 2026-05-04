const fs = require('fs');
const a = 10;
setImmediate(() => console.log('setImmediate()...'));

setTimeout(() => console.log('setTimeout()...'), 0);

Promise.resolve("Promise....").then(console.log);

fs.readFile('./test.txt', 'utf-8', () => {
    setImmediate(() => console.log('- FS setImmediate()...>>'));

    setTimeout(() => console.log('- FS setTimeout()...>>'), 0);

    process.nextTick(() => console.log('- FS NexTick...........>>'));
    console.log('- FS File read....>>');

});

process.nextTick(() => console.log('NexTick...........'));

function simple() {
    console.log("a = ", a);
}

simple();
console.log('Last line executing.....');

// output
/**
a =  10
Last line executing.....
NexTick...........
Promise....
setTimeout()...
setImmediate()...
- FS File read....>>
- FS NexTick...........>>
- FS setImmediate()...>>
- FS setTimeout()...>>
 */


// first insert into the callback queue after seding to the call stack callback queue is emply then 
    // fs module code insert into callback queue and then it will send to the call stack
    // when fs module is reading the file i will hold on then poll fase then go to then setImmediate that's why 
    // setImmediate is executed fist in the fs module callback function
