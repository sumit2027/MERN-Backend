const express = require("express")
const app = express();

app.get('/',(function(req,res){
    res.send("Hello Kon");
}))

app.get('/about',function(req,res){
    res.send("Its Me Sumit");
})

app.listen(3000)
