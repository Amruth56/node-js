const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.post('/api/data', (req, res)=> {
    res.json({
        message: "Data Received",
        data: req.body
    })
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
});