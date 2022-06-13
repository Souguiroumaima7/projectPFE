const mongoose = require("mongoose")


const SubcategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }],
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    }



},{timestamps:true})

module.exports= mongoose.model("subcategories",SubcategorySchema)