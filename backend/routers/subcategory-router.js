const route = require("express").Router()

const subcategory_controller = require("../controllers/subcategory-controller")


route.post("/create",subcategory_controller.create)
route.get("/getall",subcategory_controller.getall)
route.get("/getbyid/:id",subcategory_controller.getbyid)
route.get("/getbyname",subcategory_controller.getbyname)
route.put("/update/:id",subcategory_controller.update)
route.delete("/delete/:id",subcategory_controller.delete)



module.exports=route        


