const cookieParser = require('cookie-parser');
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(cookieParser());

// app.get('/',(req,res) => {
//     bcrypt.genSalt(10, function (err, salt)  {
//         bcrypt.hash('HACKHACK', salt, function (err, hash)  {
//             // Store hash in your password DB;
//             console.log(hash);
//         });
//     });
// })

app.get('/',(req,res) => {
    bcrypt.compare('HACKHACK', '$2b$10$nXMyME8RECyLbzILOWF6.eScTr3EMfUh1eHz7xteN1teaF7mNzwry', (err, result) => {
        res.send(result);
        console.log(result);
        
    });
})

app.get('/read',(req, res) => {
    console.log(req.cookies);
    res.send('Read page');
    
})

app.listen(3000);