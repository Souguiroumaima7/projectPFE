const user_model = require("./user-model")

const mongoose = require('mongoose')

const providerSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    }
})


const Providers =  user_model.discriminator("Providers",providerSchema)

module.exports = mongoose.model("Providers")