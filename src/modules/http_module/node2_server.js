var http = require('http');

var data = '{"name": "alnkit","age": "23"}'
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    console.log(req);
    res.end();
}).listen(5265);

console.log('server up and running!')