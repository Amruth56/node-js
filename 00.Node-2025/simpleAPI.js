const http = require('http');

const userData = [
    {
        name: 'anil',
        age: 30,
        email: 'anil@example.com'
    }, 
    
    {
        name: 'sam',
        age: 20,
        email: 'sam@example.com'
    }, 
    {
        name: 'peter',
        age: 40,
        email: 'peter@example.com'
    }, 

]

http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(userData));
    res.end();
}).listen(3000, ()=> {
    console.log('Server is running on port 3000');
}) 