const http = require("http");
const fs = require("fs");
const port = 8585;
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") res.end("hello from myFirst server");
    else if (req.url === "/users") {
        fs.readFile(`${__dirname}/my_data.js`, "utf-8", (err, data) => {
            if (err) res.end(err);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
            console.log(data);
        });
    } else res.end("<h1> Error : 404 \n Not Found!!</h1>");
});

server.listen(port, () => {
    console.log(`listening to port ${port}`);
});

// console.log(__dirname);