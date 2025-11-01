const express = require('express');
const app = express();
const port = 1234;

// Custom Middleware Function
const requestTimeStampLogger = (req, res, next) => {
    const timeStamp = new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
};

app.use(requestTimeStampLogger);

app.get('/', (req, res)=> {
    res.send('Hello from Middleware Example');
});

app.get('/about', (req, res)=> {
    res.send('About Page');
});

app.listen(port, ()=>{
    console.log(`Middleware example app listening on port ${port}`);
})