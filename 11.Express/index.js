const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World 1234')
    console.log("Request received at /");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
}); 