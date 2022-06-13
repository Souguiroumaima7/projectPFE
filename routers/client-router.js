const route = require("express").Router()

const client_controller = require("../controllers/client-controller")

const upload = require("../middlewares/uploadFiles")


route.post("/register",upload.single("photo"),client_controller.register)
route.get("/getall",client_controller.getall)
route.get("/getById/:id",client_controller.getById)
route.get("/getByName",client_controller.getByName)
route.put("/update/:id", client_controller.update)
route.delete("/delete/:id",client_controller.delete)


module.exports = route