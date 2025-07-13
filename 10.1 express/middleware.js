const express = require('express');
const app = express();

const myFirstMiddleware = (req, res, next)=>{
    console.log("middleware executed")
    next();
};

app.use(myFirstMiddleware);

app.get('/', (req, res)=>{
    res.send("Hello from home page")
});

app.get('/about', (req, res)=>{
    res.send("Hello from about page")
})

app.listen(1234, ()=>{
    console.log("server is running on port 1234")
})   