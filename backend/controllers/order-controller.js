const order_model = require("../models/order-model")


module.exports={
    create:(req,res)=>{
        const order = new order_model(req.body)
        order.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to created order"+err})
            }else{
                res.status(201).json({message:"order created successuffly", data:item})
            }
        }) 
    },
    getall:(req,res)=>{
        order_model.find({},(err,items)=>{
            if(err){
                res.status(406).json({message:"failed to get all orders"})
            }else{
                res.status(201).json({message:"list of orders",data:items}) 
            }
        })
    },
    getbyid:(req,res)=>{
        order_model.findById(req.params.id,(err,item)=>{
            if(err){
                res.status(406).json({message:"cannot get order by this id"})
            }else{
                res.status(201).json({message:"order",data:item})
            }
        }) 
    },
    getbyname:(req,res)=>{
        order_model.find({name:req.query.name},(err,items)=>{
         if(err){
            res.status(406).json({message:"failed to get order by this name"})
         }else{
             res.status(201).json({message:"orders",data:items})
         }
        })
    },
    update:(req,res)=>{
        order_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to updated order"})
            }else{
                res.status(200).json({message:"category updated successuffly",data:item})
            }
        })
    },
    delete:(req,res)=>{
        order_model.findByIdAndRemove(req.params.body, (err)=>{
            if(err){
                res.status(406).json({message:"failed to deleted order"})
            }else{
                res.status(201).json({message:"order deleted successuffly"})
            }
        })
    }
 
    

}

