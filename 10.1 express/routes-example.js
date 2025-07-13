const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Welcome to out home page');
});

//get all products
app.get('/products', (req, res)=>{
    const products=[{
        id: 1,
        label: "Product 1"
    },
    {
        id: 2,
        label: "Product 2"
    },
    {
        id: 3,
    }]
    res.json(products )
})

app.get('/product/:id',(req, res)=>{
    const productId = parseInt(req.params.id);
    const products=[{
        id: 1,
        label: "Product 1"
    },
    {
        id: 2,
        label: "Product 2"
    },
    {
        id: 3,
    }]
    const product = products.find(p => p.id === productId);

    if(product){
        res.json(product)
    } else {
        res.status(404).send("Product not found" )
    }

})

const port = 1234;

app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})