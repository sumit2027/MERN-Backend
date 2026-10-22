const bcrypt = require('bcrypt');
const express = require('express');
const app =  express();

app.get('/',(req,res) => {
    res.send('boom');
})

app.get('/read',(req,res) => {
})

app.listen(3000);
