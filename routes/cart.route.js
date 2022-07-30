const cartRouter = require("express").Router();

const cartController = require("../controllers/cart.controller");

cartRouter.get("/", cartController.getCartsByUserId);

cartRouter.post("/", cartController.postCart);

cartRouter.put("/save/:productId", cartController.putSave);

cartRouter.post("/order", cartController.postOrder);

cartRouter.post("/delete", cartController.postDelete);

cartRouter.post("/delete-all", cartController.postDeleteAll);

cartRouter.post("/order-all", cartController.postOrderAll);

module.exports = cartRouter;