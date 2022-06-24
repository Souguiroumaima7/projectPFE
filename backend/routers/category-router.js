const route = require("express").Router()

const category_controller = require("../controllers/category-controller")
  
const upload = require("../middlewares/uploadFiles")


route.post("/create", upload.single("photo"), category_controller.create)
route.get("/getall",category_controller.getall)
route.get("/getcatbyid/:id",category_controller.getone)

//route.get("/getbyid/:id",category_controller.getbyid)
route.get("/getbyname",category_controller.getbyname)
route.put("/update/:id",category_controller.update)
route.delete("/delete/:id",category_controller.delete)


module.exports=route  

