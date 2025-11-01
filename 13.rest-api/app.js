const express = require('express');
const app = express();
const port = 1234;

app.use(express.json());

let books = [
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
];

app.get('/', (req, res)=> {
    res.json({
        message: "Welcome to the Book API"
    })
})

app.get('/get', (req, res)=> {
    res.json(books);
})

app.listen(port, ()=>{
    console.log(`REST API example app listening on port ${port}`);
});