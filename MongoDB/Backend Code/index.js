const express = require("express");
const app = express();

app.get('/',function(req,res){
    res.send("chal raha hai");
})

app.get('/about',function(req,res){
    res.send("Hii i m Student of Invertis University Bareilly")
})

app.listen(3000, function(){
    console.log("Its running...");
    
})