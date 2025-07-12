const http = require('http'); 

const server = http.createServer((req, res)=>{
    console.log("req", req) 
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end("Hello server.js from http module ")
})

const port = 1111;
server.listen(port,()=>{
    console.log(`listening to port ${port}`)
})