var http = require("http");
let port = 8080

let server =  http.createServer((req,res)=>{
    res.end('hello from simple http server!')
})

server.listen(port,'localhost',(err)=>{
    if(err) return console.log('server failed')
    console.log(`server running @ ${port}`)
})