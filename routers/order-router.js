const express = require("express")
const route = express.Router()

const order_controller = require("../controllers/order-controller")


route.post("/create",order_controller.create)
route.get("/getall",order_controller.getall)
route.get("/getbyid/:id",order_controller.getbyid)
route.get("/getbyname",order_controller.getbyname)
route.put("/update/:id",order_controller.update)
route.delete("/delete/:id",order_controller.delete)


module.exports = route