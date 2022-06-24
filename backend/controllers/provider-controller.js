const provider_model = require ("../models/provider-model")


module.exports={

    register:(req,res)=>{

        req.body["image"] = req.file.filename
        
           const provider = new provider_model(req.body)
           provider.save(req.body,(err,item)=>{
            if(err){
                res.status(406).json({message:"failed to save provider "+err})
            }else{
                res.status(201).json({message:" provider saved successfully",data:item})
            }
           })
         }, 
    
       getall:(req,res)=>{
           provider_model.find({},(err,items)=>{
               if(err){
                   res.status(406).json({message:"failed to get all registred provider"+err})
               }else{
                   res.status(201).json({message:"list of registred provider",data:items }) 
               }
           })
       },
       getById:(req,res)=>{
           provider_model.findById(req.params.id,(err,item)=>{
               if(err){
                   res.status(406).json({message:"cannot get provider by this id"+err})
               }else{
                   res.status(201).json({message:"provider",data:item})
               }
           }) 
       },
       getByName:(req,res)=>{
           provider_model.find({firstname:req.query.firstname},(err,items)=>{
            if(err){
               res.status(406).json({message:"failed to get provider by this name"+err})
            }else{
                res.status(201).json({message:"provider",data:items})
            }
           })
       },
       update:(req,res)=>{
           provider_model.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>{
               if(err){
                   res.status(406).json({message:"failed to updated client"+err})
               }else{
                   res.status(201).json({message:"provider updated successuffly",data:item})
               }
           })
       },
       delete:(req,res)=>{
           provider_model.findByIdAndRemove(req.params.body, (err)=>{
               if(err){
                   res.status(406).json({message:"failed to deleted client"+err})
               }else{
                   res.status(201).json({message:"client deleted successuffly"})
               }
           })
       }
       
}