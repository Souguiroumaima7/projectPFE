const subcategory_model = require("../models/subcategory-model")
const category_model = require("../models/category-model")

module.exports={

create:(req,res)=>{

    const subcategory = new subcategory_model(req.body)
    subcategory.save(req.body,(err,item)=>{
        if(err){
            res.status(406).json({message:"failed to save product"})
        }else{
            category_model.findByIdAndUpdate(req.body.category,
               {$push:{subcategories:subcategory}},()=>{
                   res.status(201).json({message:"product created successuffly", data:item})

               })
        }
    }) 
},
getall:(req,res)=>{
    subcategory_model.find({}).populate({path:"products"}).exec((err,items)=>{
if(err){
    res.status(406).json({message:"failed to get all sbc"})
}else{
    res.status(201).json({message:"list of products", data:items})
}
    })
},

getbyid:(req,res)=>{
    subcategory_model.findById(req.params.id,(err,item)=>{
        if(err){
            res.status(406).json({message:"cannot get product by this id"})
        }else{
            res.status(201).json({message:"product",data:item})
        }
    }) 
},
getbyname:(req,res)=>{
    subcategory_model.find({name:req.query.name},(err,items)=>{
     if(err){
        res.status(406).json({message:"failed to get product by this name"})
     }else{
         res.status(201).json({message:"products",data:items})
     }
    })
},
update:(req,res)=>{
    subcategory_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
        if(err){
            res.status(406).json({message:"failed to updated product"})
        }else{
            res.status(200).json({message:"product updated successuffly",data:item})
        }
    })
},
delete:(req,res)=>{
    subcategory_model.findByIdAndRemove(req.params.body, (err)=>{
        if(err){
            res.status(406).json({message:"failed to deleted product"})
        }else{
            res.status(201).json({message:"product deleted successuffly"})
        }
    })
}


}