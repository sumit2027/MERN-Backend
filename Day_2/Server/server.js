const exress = require("express")
const app = exress();

app.use(exress.json());
app.use(exress.urlencoded({extended:true}))

app.use(function(req,res,next){
    console.log("Mai sabse pahle chalunga hamesh");
    next();
});
app.use(function(req,res,next){
    console.log("Mai sabse pahle chalunga hamesh ek bar or chla");
    next();
});

app.get('/',function(req,res){
    res.send("Hello i am sumit")
})

app.get('/profile',function(req,res){
    res.send("Kaise ho sumit express padh rahe ho profile mai")
})

app.get('/about',function(req,res,next){
    return next(new error("Somethin went to wronge!"))
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
app.listen(3000)
