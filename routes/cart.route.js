const cartRouter = require("express").Router();

const cartController = require("../controllers/cart.controller");

cartRouter.get("/", cartController.getCartsByUserId);

cartRouter.post("/", cartController.postCart);

cartRouter.put("/save/:productId", cartController.putSave);

cartRouter.delete("/delete/:cartId", cartController.deleteItem);

cartRouter.delete("/delete-all/:userId", cartController.delete_all_items);

module.exports = cartRouter;