const category_model = require("../models/category-model")
module.exports = {
    create: (req, res) => {
        req.body["image"] = req.file.filename
        const category = new category_model(req.body)
        category.save(req.body, function(err, item) {
            if (err) {
                res.status(406).json({ message: "fail to create category " })
            } else {
                res.status(201).json({ message: "category created  successfully ", data: item })
            }
        })
    },
    getall: function(req, res) { //read 
        category_model.find({}, function(err, items) {
            if (err) {
                res.status(406).json({ message: "cannot get categories" })


            } else {

                res.status(201).json({ message: "list of categories", data: items }) // we can use (200) but it works with update more
            }
        })
    },
    getone :(req, res) => {

        category_model.findById(req.params.id, function(err, item) {
            if (err) {
                res.status(406).json({ message: "cannot get category by this id" })


            } else {

                res.status(201).json({ message: " category", data: item })
            }

        })



    },
    getbyname: function(req, res) {
        category_model.find({ name: req.query.name }, function(err, items) {
            if (err) {
                res.status(406).json({ message: "cannot get category by this name" })


            } else {

                res.status(201).json({ message: " category", data: items })
            }
        })

    },
    update: function(req, res) {
        category_model.findByIdAndUpdate(req.params.id, req.body, { new: true }, //pour accepter le changement de la premiere fois},
            function(err, item) {
                if (err) {
                    res.status(406).json({ message: "failed to update category" })


                } else {

                    res.status(201).json({ message: " success of update", data: item })
                }
            })


    },
    delete: function(req, res) {
        category_model.findByIdAndRemove(req.params.id, function(err, item) {
            if (err) {
                res.status(406).json({ message: "failed to delete category" })


            } else {

                res.status(201).json({ message: " success of delete" })
            }
        })

    }


}