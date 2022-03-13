const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    if (req.url === '/')
        res.end("hello from myFirst server");
    else
        res.end('<h1> Error : 404 \n Not Found!!</h1>')
});

server.listen(3400, () => {
    console.log('listening to port 8000');
});