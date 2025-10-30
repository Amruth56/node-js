const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello from Express!');   
    console.log("Request received at /"); 
});

app.get('/products', (req, res)=> {
    const products=[
        {
            id: 1,
            label: "Product 1",
        },
        {
            id: 2,
            label: "Product 2",
        },
        {
            id: 3,
            label: "Product 3",
        }
    ]
    res.json(products);
})

app.get('/products/:id', (req, res)=> {
    const productId = parseInt(req.params.id);
    // res.send(`Product Details for Product ID: ${productId}`);
    const products=[
        {
            id: 1,
            label: "Product 1",
        },
        {
            id: 2,
            label: "Product 2",
        },
        {
            id: 3,
            label: "Product 3",
        }
    ]

    const getSingleProduct = products.find(p => p.id === productId)
    
    getSingleProduct? res.json(getSingleProduct): res.status(404).send('Product Not Found');
})

app.listen(port, ()=>{
    console.log(`Express app listening on port ${port}`);
});