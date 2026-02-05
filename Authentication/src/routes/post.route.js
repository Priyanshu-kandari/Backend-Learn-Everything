const express = require("express");
const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model")
const router = express.Router();

router.post("/create", async (req,res)=>{
    const token = req.cookies.token;
    
    if(!token){
        res.status(401).json({
            message:"unauthorized"
        })
    }

    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded)
        const user = await userModel.findById(decoded.id)
        console.log(user)


    }catch(err){
        return res.status(401).json({
            message: "invalid Token"
        })
    }

    



    res.send("Post created successfulyly")
})

module.exports = router