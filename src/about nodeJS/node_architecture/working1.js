const fs = require('fs');

setTimeout(() => {
    console.log('timer 1')
}, 0);

fs.readFile('./textFile.txt','utf-8',()=>{
    console.log('IO Finished')
    
    setTimeout(() => {
        console.log('timer 2')
    }, 0);
    setTimeout(() => {
        console.log('timer 3')
    }, 3000);
    setImmediate(()=>{console.log('Set Immediate')})
    // if I/O queue is empty then if their is an expired timer it will be executed else setImmediate() will be executed
})

console.log('Hi, from top level code')