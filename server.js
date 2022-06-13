const express = require("express")
const app = express()
const database = require("./config/database")
const dotenv = require("dotenv").config()

app.use(express.json())


const PORT = process.env.PORT



const product_router = require("./routers/product_router")
const category_router = require("./routers/category-router")
const subcategory_router = require("./routers/subcategory-router")
const order_router = require("./routers/order-router")



const client_router = require("./routers/client-router")



app.use("/products",product_router)
app.use("/categories",category_router)
app.use("/subcategories",subcategory_router)
app.use("/orders",order_router)


app.use("/clients",client_router)


app.get("/getImage/:img",function(req,res){
    res.sendFile(__dirname + "/storages/"+ req.params.img)
})




app.listen(PORT,()=>{
console.log(`server working good on http://localhost:${PORT}`)
})
