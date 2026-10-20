const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
   
    title:String,
     discription:String,
    // Name:String,
    // Address:String,
    // City:String,
    // Phone_no:Number,

})

const model =  mongoose.model("note",noteSchema)
module.exports = model
