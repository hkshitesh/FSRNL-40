const express = require('express');

const app = express();

app.get('',(req,res)=>{
    res.send('Hello, This is my Home Page');
});

app.get('/about',(req,res)=>{
    res.send('Hello, This is about page '+req.query.name);
});

app.get('/contact',(req,res)=>{
    res.send('Hello, This is Contact page');
});

app.listen(5000);