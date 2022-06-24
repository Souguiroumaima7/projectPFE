const mongoose = require("mongoose")


const bcrypt = require('bcrypt');
const saltRounds = 10;


const baseOptions = {
    discriminatorKey: 'itemtype', 
    collection: 'users',
  };
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    tel:{
        type:String,
        required:true
    },
    /*  image:{
        type:String,
         required:true
     },
     isAdmin : {
          type:Boolean ,
          default :false */
  
},baseOptions,
{timestamps:true})


userSchema.pre("save",function(next){
    if (this.password) {
        this.password = bcrypt.hashSync(this.password,saltRounds)
    }
    next()
})




module.exports = mongoose.model("users",userSchema)


