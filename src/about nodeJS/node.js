// -------------------------------
// below code explains Non-Blocking I/O 
const printHello = () => {
    console.log("Hello with 2 seconds wait time");
}
const printHello2 = () => {
    console.log("Hello with 1 seconds wait time");
}

setTimeout(printHello, 2000);
setTimeout(printHello2, 1000);
console.log(printHello)
console.log("printing finished");

// ---------------------------------

console.log(__dirname)