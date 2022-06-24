const user_model = require("../models/user-model")

const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken")

const  JWT_SECRET = process.env.JWT_SECRET
const RT_SECRET = process.env.RT_SECRET





const generateAccessToken =(user)=> {
return jwt.sign({id:user._id,email:user.email},JWT_SECRET, {expiresIn :"1m"})
}

const generateRefreshToken = (user) => {

    return jwt.sign({id:user._id, email:user.email},RT_SECRET,{expiresIn:"2m"})
}


let RefreshTokens = []

module.exports = {
    login :async(req,res) =>{
       const user = await user_model.findOne({email:req.body.email})
       if (!user) {
        res.status(406).json ({message : "email does not exit"})
       }else {
   
        const validPassword = await bcrypt.compareSync(req.body.password, user.password)
           
        if (!validPassword){
            res.status(406).json ({message : "password incorrect"})
        }else {


            const Token = generateAccessToken(user)
            const RefreshToken = generateRefreshToken(user)
            RefreshTokens.push(RefreshToken)

            res.status(200).json ({message: "Welcome",data:user, AT:Token, RT:RefreshToken})
        }

       }

    },


    RefreshToken : (req,res,next) =>{
        const RefreshToken = req.body.token 
        if (!RefreshToken) return res.status(401).json("you are not authenticated :")
        if(!RefreshToken.includes(RefreshToken)) {
            return res.status(401).json("refresh token is not valid ")

        }


        jwt.verify(RefreshToken,RT_SECRET,(err,user)=>{
            err && console.log(err)

            RefreshTokens = RefreshTokens.filter((token)=> token!==RefreshToken)

            const newToken = generateAccessToken(user)
            const  newRefreshToken = generateRefreshToken(user)
            RefreshTokens.push(newRefreshToken)

            res.status(200).json({AT:newToken,RT:newRefreshToken})
        })



    } ,
    logout : (req,res) => {
        const RefreshToken = req.body.token 
        RefreshTokens = RefreshTokens.filter((token)=> token !== RefreshToken) 
    
        res.status(200).json({message:"you are logout"})

        
    }
}