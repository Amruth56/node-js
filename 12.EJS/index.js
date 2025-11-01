const express = require('express');
const app = express();
const port = 1234;


app.set('view engine', 'ejs');

app.set('views', Path.join(__dirname, 'views'));

const products = [
    { id: 1, label: "Product 1" },
    { id: 2, label: "Product 2" },
    { id: 3, label: "Product 3" }
];

app.get('/', (req, res)=> {
    res.render('home', {
        title: 'Home', 
        products: products
    })
})

app.get('/about', (req, res)=> {
    res.render('about', {
        title: 'About Us'
    })
});

app.listen(port, ()=>{
    console.log(`EJS example app listening on port ${port}`);
});