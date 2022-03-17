const EventEmiter = require('events');

const myEmiter = new EventEmiter();

myEmiter.on("sayMyName",()=>{
    console.log('Your Name is Ankit')
})

myEmiter.on("sayMyName",data=>{
    console.log(`Your Name is ${data}`)
})

myEmiter.emit("sayMyName");
myEmiter.emit("sayMyName","Verma");