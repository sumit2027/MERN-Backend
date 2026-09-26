const express = require("express")
const model = require("./models/model")

const app = express()
app.use(express.json())


app.post("/note", async (req,res) => {
    const { title, discription } = req.body

    const note  = await model.create({
        title:title,
        discription:discription
    })

    res.status(201).json({
        message:"Note Create Successfully",
        note:note
    })
})



module.exports = app
