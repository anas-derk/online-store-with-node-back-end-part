const ordersRouter = require("express").Router();

const ordersCotroller = require("../controllers/orders.controller");

ordersRouter.get("/", ordersCotroller.getOrdersPage);

ordersRouter.post("/", ordersCotroller.postOrder);

ordersRouter.post("/cancel", ordersCotroller.postOrderCancel);

ordersRouter.post("/cancel-all", ordersCotroller.postCancelAll);

module.exports = ordersRouter;