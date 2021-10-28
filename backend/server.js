
import express from 'express';

//in server side prog we append .js at the end
import data from './data.js';

const app = express();

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  });



//here we define the first route - this route of backend wil respond server is ready

//here we create a handler req, res and inside the body of handler we send back a msg 
app.get('/', (req, res) => {

    res.send('server is ready');

});

app.get('/api/products', (req, res) => {

    res.send(data.products);
});

//to make our server running we call listen method of app, here we need to define a default port after listening to this port
//it should call the body of this func and print console.
//so when we click on this link it will print server is ready
const port = process.env.PORT || 5000;
//if env port does not exist use 5000
app.listen(5000, () => {

    console.log(`serve at http://localhost:${port}`);
});

 
