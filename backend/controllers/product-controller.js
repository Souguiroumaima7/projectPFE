const product_model = require("../models/product-model")
const subcategory_model = require("../models/subcategory-model")

module.exports = {
    create: (req, res) => {
      /*   req.body["galleries"] = req.files.length <= 0 ? [] : req.files.map(function(file) {
            return { name: file.filename, description: "add prod" };
        });  */   
        const product = new product_model(req.body)
        product.save(req.body, function(err, item) {
            if (err) {
                res.status(406).json({ message: "fail to create product " })
            } else {
                subcategory_model.findByIdAndUpdate(req.body.subcategory, { $push: { products: product } }, () => {

                    res.status(201).json({ message: "product created  successfully ", data: item })
                })
            }
        })
    },
    getall: function(req, res) { //read 
        product_model.find({}).populate("subcategory").exec(function(err, items) { //pour retourner tous les informations 
            if (err) {
                res.status(406).json({ message: "cannot get products" })


            } else {


                res.status(201).json({ message: "list of products", data: items }) // we can use (200) but it works with update more
            }
        })
    },
    getone: function(req, res) {

        product_model.findById(req.params.id, function(err, item) {
            if (err) {
                res.status(406).json({ message: "cannot get product by this id" })


            } else {

                res.status(201).json({ message: " product", data: item })
            }

        })



    },
    getbyname: function(req, res) {
        product_model.find({ name: req.query.name }, function(err, items) {
            if (err) {
                res.status(406).json({ message: "cannot get product by this name" })


            } else {

                res.status(201).json({ message: " product", data: items })
            }
        })

    },
    update: function(req, res) {
        product_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
            function(err, item) {
                if (err) {
                    res.status(406).json({ message: "failed to update product" })


                } else {

                    res.status(201).json({ message: " success of update", data: item })
                }
            })


    },
    delete: function(req, res) {
        product_model.findByIdAndRemove(req.params.id, function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to delete product" })


            } else {

                res.status(201).json({ message: " success of delete" })
            }
        })

    }
}