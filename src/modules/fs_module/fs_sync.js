var fs = require('fs');

// Sync functions don't require callback functions 
// - because they work in synchronous way

fs.writeFileSync('file.txt', 'Hello Written')
console.log('file written');


fs.appendFileSync('file.txt', '\n appending file')
console.log('file fs finished')