const productObject = require("../models/product.model")

function getProductInfo(req, res) {

    let productId = req.params.productId;

    productObject.get_product_info_by_id(productId).then(productInfo => {

        res.json(productInfo);

    }).catch(err => res.json(err));
}

function postAddProduct(req, res) {

    productObject.addProduct({

        productImageSrc: "images/products/" + req.file.originalname,
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category

    }).then(() => {

        res.redirect('/')

    }).catch(err => {

        res.redirect("/errors")

    })

}

module.exports = { getProductInfo, postAddProduct }