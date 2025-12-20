const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify({ message: "Hello, this is a response from the server!" }));
    res.end();
}).listen(4000, () => {
    console.log('Server is running on port 4000');
});