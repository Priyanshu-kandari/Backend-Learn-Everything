const musicModel = require("../models/music.model")

const getAllMusic = async (req,res) => {
    const musics = await musicModel.find().limit(2).populate("artist", "username email")

    res.status(200).json({
        message: "Music fetched successfully",
        musics  : musics
    })
}

module.exports = {getAllMusic}