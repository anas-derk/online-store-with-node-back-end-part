const ordersObject = require("../models/orders.model");

function getAddProductPage(req, res) {

    res.json();

}

function getManageOrdersPage(req, res) {

    ordersObject.getAllOrders().then(orders => {

        res.json(orders);

    }).catch(err => res.json(err));

}

function post_order_status_edit(req, res) {

    ordersObject.orderStatusEdit(req.body.productId, req.body.orderStatus).then(() => {

        res.json();

    }).catch(err => res.json(err));

}

function getPendingOrders(req, res) {

    ordersObject.getOrdersByStatus("Pending").then(orders => {

        res.json(orders);

    }).catch(err => res.json(err));

}

function getSentOrders(req, res) {

    ordersObject.getOrdersByStatus("Sent").then(orders => {

        res.json(orders);

    }).catch(err => res.json(err));

}

function getCompletedOrders(req, res) {

    ordersObject.getOrdersByStatus("Completed").then(orders => {

        res.json(err);

    }).catch(err => res.json(err));

}

module.exports = {
    getAddProductPage,
    getManageOrdersPage,
    post_order_status_edit,
    getPendingOrders,
    getSentOrders,
    getCompletedOrders
}