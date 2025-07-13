const express = require('express');
const app = express();

const requestTimestampLogger = (req, res, next)=>{
    const timeStamp = new Date().toISOString();

    console.log(`${timeStamp} from ${req.method} to ${req.url}`)
    next()
}

app.use(requestTimestampLogger);


app.get('/', (req, res)=>{
    res.send("Hello from home page")
});

app.get('/about', (req, res)=>{
    res.send("Hello from about page")
})

app.listen(1234, ()=>{
    console.log("server is running on port 1234")
})   