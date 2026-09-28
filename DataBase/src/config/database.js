const mongoose = require("mongoose")

function connentDataBase(){
    mongoose.connect("mongodb+srv://Backend:1234@cluster0.vl3bszl.mongodb.net/")
    .then(()=>{
        console.log("DataBase connecting Sucsesfully");
    })    
}

module.exports = connentDataBase