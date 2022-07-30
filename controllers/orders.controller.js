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

function postOrderCancel(req, res) {

    orderObject.orderCancel(req.body.productId, req.session.userId).then(() => {

        res.redirect("/orders")

    }).catch(err => res.redirect("/errors"))

}

function postCancelAll(req, res) {

    orderObject.orders_all_cancel(req.session.userId).then(() => {

        res.redirect("/orders")

    }).catch(err => res.redirect("/errors"))

}

module.exports = { getOrders, postOrder, postOrderCancel, postCancelAll }