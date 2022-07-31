const orderObject = require("../models/orders.model")

function getOrders(req, res) {

    orderObject.getOrdersByUserId(req.query.userId).then(orders => {

        res.json(orders);

    }).catch(err => console.log(err));

}

function postOrder(req, res) {

    let productInfo = req.body.productInfo;

    let address = req.body.address;

    let orderInfo = {...productInfo, time: Date.now(), address};    

    orderObject.addNewOrder(orderInfo).then(() => {

        res.json(null);

    }).catch(err => console.log(err));

}

function deleteOrder(req, res) {

    orderObject.orderCancel(req.params.orderId).then(() => {

        res.json(null);

    }).catch(err => console.log(err));

}

function deleteAllOrders(req, res) {

    orderObject.all_orders_cancel(req.params.userId).then(() => {

        res.json(null);

    }).catch(err => console.log(err));

}

module.exports = { getOrders, postOrder, deleteOrder, deleteAllOrders }