const Mongoose = require('mongoose');

const noteSchema = new Mongoose.Schema({
    title:String,
    description:String,
})

const noteModel = Mongoose.model("note",noteSchema)

module.exports = noteModel