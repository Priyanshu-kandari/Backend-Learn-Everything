const mongoose = require('mongoose');

async function  connectDB() {
    await mongoose.connect("mongodb+srv://Kandari:uEDu2mmFGmqI47D4@backend-learn-everythin.mpdcgcv.mongodb.net/halley")


    console.log("connectd to DB")
}

module.exports = connectDB