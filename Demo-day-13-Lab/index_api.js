const express = require('express');
const app = express();
const PORT = 5000;
const books = [
    {id: 1, title: "Intro to Node JS", author: "John"},
    {id: 2, title: "Fundamentals of JavaScript", author: "Smith"},
    {id: 3, title: "Intro to C Programming", author: "Martin"}
];
// app.use(express.json());
app.get('',(req,res) => {
    res.send('Welcome to Books API');
});
app.get('/api/books',(req,res) => {
    res.json(books);
});
app.get('/api/books/:id',(req,res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find((b)=>b.id===bookId);
    if(book){
        res.json(book);
    }
    else{
        res.status(404).json({message: 'Book Not Found'});
    }    
});
app.listen(PORT);