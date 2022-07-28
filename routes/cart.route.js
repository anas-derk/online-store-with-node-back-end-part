const cartRouter = require("express").Router();

const cartController = require("../controllers/cart.controller");

cartRouter.get("/", cartController.getCartPage);

cartRouter.post("/cart", cartController.postCart);

cartRouter.post("/save", cartController.postSave);

cartRouter.post("/order", cartController.postOrder);

cartRouter.get("/verify-orders", cartController.getVerifyOrdersPage);

cartRouter.post("/delete", cartController.postDelete);

cartRouter.post("/delete-all", cartController.postDeleteAll);

cartRouter.post("/order-all", cartController.postOrderAll);

module.exports = cartRouter;