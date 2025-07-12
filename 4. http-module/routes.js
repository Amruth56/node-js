const http = require('http');
const server = http.createServer((req, res)=>{
const url = req.url;

if(url === '/'){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("This is the home page")
}

if(url === '/about'){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("this is about page")
}

})


const port = 1112;
server.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})