const homeRouter = require("express").Router();

const homeController = require("../controllers/home.controller");

homeRouter.get('/', homeController.getAllProducts);

homeRouter.get('/determinate-products', homeController.get_products_by_category);

module.exports = homeRouter