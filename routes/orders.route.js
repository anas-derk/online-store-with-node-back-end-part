const ordersRouter = require("express").Router();

const ordersCotroller = require("../controllers/orders.controller");

ordersRouter.get("/", ordersCotroller.getOrders);

ordersRouter.post("/", ordersCotroller.postOrder);

ordersRouter.delete("/cancel/:orderId", ordersCotroller.deleteOrder);

ordersRouter.delete("/cancel-all/:userId", ordersCotroller.deleteAllOrders);

module.exports = ordersRouter;