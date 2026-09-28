const connentDataBase = require("./src/config/database")

const app = require("./src/app")
const mongoose = require("mongoose")

// function connentDataBase(){
//     mongoose.connect("mongodb+srv://Backend:1234@cluster0.vl3bszl.mongodb.net/MysuziData")
//     .then(()=>{
//         console.log("DataBase connecting Sucsesfully");
//     })    
// }
connentDataBase()
app.listen(3000,() => {
    console.log("Server is running on port 3000");  
})