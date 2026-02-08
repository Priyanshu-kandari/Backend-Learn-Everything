const albumModel = require("../models/album.model")

const getAllAlbums = async (req,res) => {
    const albums = await albumModel.find().select("title artist").populate("artist")

    res.status(201).json({
        message: " here are albums",
        albums
    })
}

module.exports = { getAllAlbums }