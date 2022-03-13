const fs = require('fs');
const http = require('http');

const port = 8181
// creating a server
const server = http.createServer((req,res)=>{
    // checking for url condition
    if(req.url==='/dataFromFsModule')
    {
        // if condition true then reading file
        fs.readFile('./../../fs_module/sample_htstp.txt','utf-8',(err,data)=>{
            // if error occurs return from function and send statement as response
            if(err) return res.end('error reading data')
            // if no error then send below as response
            res.end(data)
        })
    }
    else res.end('Error: Page not found!')
})

// listening to server || running the server
server.listen(port,'localhost',()=>{
    console.log(`server up & running at ${port}`)
})