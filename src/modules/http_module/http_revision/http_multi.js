const fs = require("fs");
const http = require("http");

const port = 8282;

let server = http.createServer((req, res) => {
  if (req.url === "/getFileData" || req.url === "/") {
    fs.readFile(
      "./../../fs_module/sample_http.txt",
      "utf-8",
      (err, data) => {
        if (err) return console.log("error reading data from file");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    );
  } else if (req.url === "/getJsonData") {
    fs.readFile("./../my_data.js", "utf-8", (err, data) => {
      if (err) return console.log("error reading data from file");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(data);
      res.end();
    });
  } else {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.end("page not found");
  }
});

// listening to server || running the server
server.listen(port, "localhost", () => {
  console.log(`server up & running at ${port}`);
});
