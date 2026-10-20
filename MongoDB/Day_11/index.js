const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

// app.use((req,res,next)=>{
//     res.render("index");
// })

app.get('/',((req,res)=>{
    res.send("ye hai => function chal raha hai acche se");
}))

app.get('/profile/:username/:age',((req,res)=>{
    // res.send(`Welcome ${req.params.username} of age ${req.params.age}`)
    res.send(req.params)
}))
app.listen(3000,(()=>{
    console.log("server runing...");
    
}));
