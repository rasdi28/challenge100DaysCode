const express = require('express');
const app = express();
 
//route untuk halaman home
app.get('/',(req, res) => {
  res.send('Welcome To Express');
});
 
//route untuk halaman about
app.get('/about',(req, res) => {
  res.send('<h1>This is about page</h1>');
});

//route untuk halaman menu
app.get('/menu',(req,res)=> {
    res.send('<h2>ini adalah halaman menu</h2>');
});
 
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});