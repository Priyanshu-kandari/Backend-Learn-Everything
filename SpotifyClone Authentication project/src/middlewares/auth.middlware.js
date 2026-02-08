const jwt = require("jsonwebtoken");

const authArtist = async (req , res , next) => {
    try{
        const Token = req.cookies.token;

        if(!Token){
            return res.status(401).json({message: "unauthorized"})
        }

        const decoded = jwt.verify(Token, process.env.JWT_SECRET)
        if(decoded.role!= "artist"){
            return res.status(401).json({message: "unauthorized"})
        }

        req.user = decoded;

        next()

        
    }catch(err){
        console.log
    }
}

const authUser = async(req , res , next) => {
    try{
        const Token = req.cookies.token;

        if(!Token){
            return res.status(401).json({message: "unauthorized"})
        }

        const decoded = jwt.verify(Token, process.env.JWT_SECRET)
        if(decoded.role!= "user"){
            return res.status(403).json({message: "You don't have access"})
        }

        req.user = decoded;

        next()

        
    }catch(err){
        console.log
    }
}

module.exports = {authArtist , authUser}