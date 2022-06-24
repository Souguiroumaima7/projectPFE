const express = require("express")
const cors = require("cors")

const app = express()
const database = require("./config/database")
const dotenv = require("dotenv").config()

app.use(express.json())
app.use(cors())


const PORT = process.env.PORT


const product_router = require("./routers/product_router")
const category_router = require("./routers/category-router")
const subcategory_router = require("./routers/subcategory-router")
const order_router = require("./routers/order-router")
const client_router = require("./routers/client-router")
const provider_router = require ("./routers/provider-router")
const auth_router = require("./routers/auth-router")



app.use("/products",product_router)
app.use("/categories",category_router)
app.use("/subcategories",subcategory_router)
app.use("/orders",order_router)
app.use("/clients",client_router)
app.use("/Providers",provider_router)
app.use ("/auth",auth_router)



app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
})




app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})
