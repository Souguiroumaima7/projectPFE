const express = require("express")
const route = express.Router()

const product_controller = require("../controllers/product-controller")


const upload = require("../middlewares/uploadFiles")

route.post("/create",upload.array("photos"),product_controller.create)
route.get("/getall",product_controller.getall)
route.get("/getbyid/:id",product_controller.getbyid)
route.get("/getbyname",product_controller.getbyname)
route.put("/update/:id",product_controller.update)
route.delete("/delete/:id",product_controller.delete)



module.exports = route
