const express = require('express')
const multer = require('multer')
const router = express.Router()
const musicController = require("../controllers/music.controller")
const albumController = require("../controllers/album.controller")
const authMiddleware =  require("../middlewares/auth.middlware")
const getMusicController = require("../controllers/getMusic.controller")
const getAlbumsController = require("../controllers/getAlbum.controller")

const upload = multer({
    storage: multer.memoryStorage()
});

router.post("/upload", authMiddleware.authArtist ,upload.single("music"), musicController.createMusic)
router.post("/uploadAlbum", authMiddleware.authArtist ,albumController.createAlbum)
router.get("/",authMiddleware.authUser, getMusicController.getAllMusic)
router.get("/albums", authMiddleware.authUser, getAlbumsController.getAllAlbums)
router.get("/albums/:albumId", authMiddleware.authUser, musicController.getAlbumById)


module.exports = router