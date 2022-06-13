const mongoose  = require("mongoose")



const productdetailsSchema = new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    qte:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true  
    },
    dateL:{
        type:String,
        required:true 
    }
})

const orderSchema = new mongoose.Schema({
ref:{
    type:String,
    required:true,
    trim:true,
},
priceTotal:{
    type:String,
    required:true,

},
date:{
    type:String,
    required:true,  
},
status:{
    type:String,
    default:"en attente"
},
products:[productdetailsSchema]


},{timestamps:true})
module.exports = mongoose.model("orders",orderSchema)