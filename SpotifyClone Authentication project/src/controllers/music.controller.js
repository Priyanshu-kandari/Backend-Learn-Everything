const musicModel = require("../models/music.model")
const albumModel = require("../models/album.model")
const jwt = require("jsonwebtoken");
const uploadfile = require("../services/storage.service")


const createMusic = async (req,res) => {
    const result = await uploadfile(req.file.buffer.toString("base64"))

    const music = await musicModel.create({
    uri:result.url,
    title: req.body.title,
    artist: req.user.id
    })

    res.status(201).json({
        message: "Music created Successfully",
        music:{
            id: music._id,
            uri:music.uri,
            title:music.title,
            artist: music.artist
        }
    })

    }

const getAlbumById = async (req,res) => {
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).select("title artist").populate("artist", "Username email")

   return res.status(200).json({
    message: "Album fetched successfully",
    album
   })

}

module.exports = {createMusic, getAlbumById}