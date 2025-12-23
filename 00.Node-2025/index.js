let express = require('express');


let app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({status: 1, msg: 'Hello World!'});
});

app.post("/login", (req, res)=> {
    console.log(req.body);

    res.status(200).json({
        status: 1,
        msg: 'Login Successful',
        body: req.body,
        queryData: req.query
    })
})

app.post("/products", (req, res) => {
    res.send({status: 1, msg: 'This is products endpoint'});    
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send({status: 1, msg: 'Login Successful'});
})

app.get("/news", (req, res) => {
    res.end("news ")  
})
app.get("/news/:id", (req, res) => {
    let currentId = req.params.id;
    res.send(`news from id ${currentId}`)    
})
  
let port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})