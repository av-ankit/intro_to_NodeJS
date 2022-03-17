const EventEmiter = require("events");

class ClassEmit extends EventEmiter {
  constructor() {
    super();
  }
}
const myEmiter = new ClassEmit();

myEmiter.on("sayMyName", () => {
  console.log("Your Name is Ankit");
});

myEmiter.on("sayMyName", (data) => {
  console.log(`Your Name is ${data}`);
});

myEmiter.emit("sayMyName");
myEmiter.emit("sayMyName", "Verma");
