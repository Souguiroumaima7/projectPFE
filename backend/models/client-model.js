const user_model = require("./user-model")

const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    adressL:{
        type:String,
        required:true
    }
})


const Clients = user_model.discriminator("Clients",clientSchema)

module.exports = mongoose.model("Clients")