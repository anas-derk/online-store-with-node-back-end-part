const productObject = require("../models/product.model");

function getAllProducts(req, res) {

    productObject.get_all_products_info().then(products => {

        res.json(products);

    }).catch(err => {

        res.json(err);

    });

}

function get_products_by_category(req, res) {

    let category = req.query.category;

    productObject.get_products_by_category(category).then(products => {

        res.json(products);

    }).catch(err => res.json(err));

}

module.exports = { getAllProducts, get_products_by_category };