const productInfoRouter = require("express").Router();

const productInfoController = require("../controllers/productInfo.controller");

productInfoRouter.get("/:productId", productInfoController.getProductInfo);

module.exports = productInfoRouter;