const express = require('express')
const app = express()

const port = 1234;

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.listen(port, ()=>{
    console.log(`server si runing at port ${port}`)
})