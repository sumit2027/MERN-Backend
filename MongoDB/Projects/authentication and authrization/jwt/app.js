const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/',(req,res) => {
    let token = jwt.sign({email:'sumit@gmail.com'},"secrat")
    res.cookie("token",token);
    res.send('Done');  
})
app.get('/read',(req,res) => {
    let data = jwt.verify(req.cookies.token, "secrat")
    console.log(data);
})
app.listen(3000);