const { ImageKit } = require("@imagekit/nodejs")

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadfile = async (file) => {
    const result = await imageKit.files.upload({
         file,
         fileName: `music_${Date.now()}`,
         folder: "Spotify-Artist-Music"
    })

    return result;

}

module.exports = uploadfile