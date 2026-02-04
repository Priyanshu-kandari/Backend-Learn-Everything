const mongoose = require("mongoose");

const connectdb = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("database connected successfully;")
    }catch(err){
        console.log("Database connection error:" , err)
    }
}

module.exports = connectdb