const client_model = require("../models/client-model")




module.exports={
 register:(req,res)=>{

req.body["image"] = req.file.filename

   const client = new client_model(req.body)
   client.save(req.body,(err,item)=>{
    if(err){
        res.status(406).json({message:"failed to save client"+err})
    }else{
        res.status(201).json({message:"client saved successuffly",data:item})
    }
   })
 }, 
 
    getall:(req,res)=>{
        client_model.find({},(err,items)=>{
            if(err){
                res.status(406).json({message:"failed to get all registred clients"})
            }else{
                res.status(201).json({message:"list of registred clients",data:items }) 
            }
        })
    },
    getById:(req,res)=>{
        client_model.findById(req.params.id,(err,item)=>{
            if(err){
                res.status(406).json({message:"cannot get client by this id"})
            }else{
                res.status(201).json({message:"clients",data:item})
            }
        }) 
    },
    getByName:(req,res)=>{
        client_model.find({firstName:req.query.firstName},(err,items)=>{
         if(err){
            res.status(406).json({message:"failed to get client by this name"})
         }else{
             res.status(201).json({message:"clients",data:items})
         }
        })
    },
    update:(req,res)=>{
        client_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to updated client"})
            }else{
                res.status(200).json({message:"client updated successuffly",data:item})
            }
        })
    },
    delete:(req,res)=>{
        client_model.findByIdAndRemove(req.params.body, (err)=>{
            if(err){
                res.status(406).json({message:"failed to deleted client"})
            }else{
                res.status(201).json({message:"client deleted successuffly"})
            }
        })
    }
    
 


}