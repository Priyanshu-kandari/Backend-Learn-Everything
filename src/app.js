const express = require('express')
const noteModel = require('./models/note.model')

const app = express()
app.use(express.json())

// POST /notes => Create a Note
app.post("/notes", async (req,res) => {
    const data = req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).json({message:"Note created successfully"})
})

// GET /notes => Read a Note
app.get("/notes", async (req,res) => {
    const notes = await noteModel.find()
    res.status(200).json({message: "notes fetch successfully",
        Notes:notes})
})

//DELETE /note => delete a note 
app.delete("/notes/:id", async (req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({message:"notes deleted successfully"})
})

app.patch("/notes/:id", async (req,res)=>{
    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        description: description
    })
    res.status(200).json({message:"notes updated successfully"})
})

module.exports = app;