const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req,res) => {
    res.send("Hello");
});

// app.get('/create', async (req,res) => {
//     let createduser  = await userModel.create({
//         user:"Sumit kashyap",
//         username:"Sumit123",
//         email:"sumit@gmail.com"
//     })
//     res.send(createduser);
// })

app.get('/create',async (req,res) => {
    let createduser = await userModel.create({
        name:"Sumit",
        username:"Manisha",
        email:"sumit@gmail.com"
    })
    res.send(createduser);
})

app.get('/read', async (req,res) => {
    // let readuser = await userModel.find({username:"Manisha123"});
    let readuser = await userModel.find();
    res.send(readuser);
})

app.get('/update', async (req,res) => {
    let updateduser = await userModel.findOneAndUpdate({username:"Manisha"}, {name:"Manisha Sumit"}, {new: true})
    res.send(updateduser);
})

app.get('/delete',async (req,res) => {
    let deleteuser = await userModel.findOneAndDelete({username:"Sumit123"})
    res.send(deleteuser);
})

app.listen(3000,(() => {
    console.log('its running...');
    
}));