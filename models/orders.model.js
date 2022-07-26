const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
    name: String,
    price: Number,
    amount: Number,
    productId: String,
    userId: String,
    address: String,
    status: {
        type: String,
        default: "Pending"
    },
    time: Date
});

const orderModel = mongoose.model("order", ordersSchema),

    cartObject = require("../models/cart.model");

const dbUrl = require("./DB_URL");

const DB_URL = dbUrl;

function addNewOrder(orderInfo) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            let newOrder = new orderModel(orderInfo);

            return newOrder.save();

        }).then(() => {

            return mongoose.models.cart.deleteOne({productId: orderInfo.productId, userId: orderInfo.userId})

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        })

    })

}

function getOrdersByUserId(userId) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.find({ userId });

        }).then(orders => {

            mongoose.disconnect();

            resolve(orders);

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function orderCancel(orderId) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.deleteOne({ _id: orderId });

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function all_orders_cancel(userId) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.deleteMany({ userId, status: "Pending" });

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function order_all_items(orders) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.insertMany(orders);

        }).then(() => {

            return mongoose.models.cart.deleteMany({userId: orders[0].userId});

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function getAllOrders() {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.find({});

        }).then(orders => {

            mongoose.disconnect();

            resolve(orders);

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function orderStatusEdit(orderId, newOrderStatus) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.updateOne({ _id: orderId }, { status: newOrderStatus });

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

function getOrdersByStatus(status) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return orderModel.find({ status });

        }).then(orders => {

            mongoose.disconnect();

            resolve(orders);

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });

    });

}

module.exports = {
    addNewOrder,
    getOrdersByUserId,
    orderCancel,
    all_orders_cancel,
    order_all_items,
    getAllOrders,
    orderStatusEdit,
    getOrdersByStatus,
};