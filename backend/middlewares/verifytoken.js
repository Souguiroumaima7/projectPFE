
const jwt = require ("jsonwebtoken")


const verifyToken = (req,res,next) => {

 const JWT_SECRET = process.env.JWT_SECRET


    const token = req.headers.authorization

    if (token) {
        jwt.verify(token,JWT_SECRET,(err,payload)=>{
            if (err) {
                res.status(403).json({message : "token is not valid"})
            }else {
                req.user = payload 
                next()
            }
        })  
    }else {
        res.status(403).json({message : "you are not authenticated , please sign in "})
    }
}



module.exports = verifyToken
