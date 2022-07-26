const ordersObject = require("../models/orders.model");

function getAddProductPage(req, res) {

    res.json();

}

function getAllOrders(req, res) {

    ordersObject.getAllOrders().then(orders => {

        res.json(orders);

    }).catch(err => res.json(err));

}

function put_order_status_edit(req, res) {

    ordersObject.orderStatusEdit(req.params.orderId, req.body.newOrderStatus).then(() => {

        res.json();

    }).catch(err => res.json(err));

}

function getSpecificOrders(req, res) {

    ordersObject.getOrdersByStatus(req.query.orderStatus).then(orders => {

        res.json(orders);

    }).catch(err => res.json(err));

}

module.exports = {
    getAddProductPage,
    getAllOrders,
    put_order_status_edit,
    getSpecificOrders
}