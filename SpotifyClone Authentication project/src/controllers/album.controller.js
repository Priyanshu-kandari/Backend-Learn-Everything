const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken")


const createAlbum = async (req , res) => {
        const {title, Tracks} = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: Tracks
        })

        res.status(201).json({
            message: " ALbum created successfully",
            album
        })
}

module.exports = {createAlbum}