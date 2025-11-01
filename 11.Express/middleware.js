const express = require('express');
const app = express();
const port = 1111

// define middleware function 
const myFirstMiddleware = (req, res, next) => {
    console.log('My First Middleware executed');
    next(); 
}

app.use(myFirstMiddleware);

app.get('/', (req, res)=> {
    res.send('Hello from Middleware Example');
});

app.get('/about', (req, res)=> {
    res.send('About Page');
});

app.listen(port, ()=>{
    console.log(`Middleware example app listening on port ${port}`);
})