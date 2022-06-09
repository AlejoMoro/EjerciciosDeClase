const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath= path.resolve(__dirname, './public')
app.use(express.static(publicPath));
app.get('/home', (req, res)=>{
    res.sendFile (path.join(__dirname,'/views/home.html'))
});
app.get('/register', (_req, res)=>{
    res.sendFile (path.join(__dirname,'/views/register.html'))
});
app.get('/login', (_req, res)=>{
    res.sendFile (path.join(__dirname,'/views/login.html'))
});
app.listen (3030, (req, res)=> console.log ('Servidor 3030 funcionando'));