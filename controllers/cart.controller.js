const cartObject = require("../models/cart.model");

function getCartsByUserId(req, res) {

    let userId = req.query.userId;

    cartObject.getCartsByUserId(userId).then(carts => {

        res.json(carts);

    }).catch(err => res.json(err) );

}

function postCart(req, res) {

    let item = req.body;

    cartObject.add_new_item(item)
        
    .then(() => {

        res.json();

    }).catch(err => {

        console.log(err);

    });

}

function putSave(req, res) {

    cartObject.editItem(req.params.productId, req.body.newAmount).then(() => {

        res.json(null);

    }).catch(err => {

        console.log(err);

    });

}

function postOrder(req, res) {

    cartObject.productOrder({

        name: req.body.name,

        price: req.body.price,

        amount: req.body.amount,

        productId: req.body.productId,

        userId: req.session.userId,

        timestamp: Date.now()

    }).then(productInfo => {

        req.flash("productInfo", productInfo)

        res.redirect("/cart/verify-orders")

    }).catch(err => res.redirect("/errors") )

}

function getVerifyOrdersPage(req, res) {

    res.render("VerifyOrders/index", {

        isUser: true,

        isAdmin: req.session.isAdmin,

        pageTitle: "Verify Orders Page - Online Store"
    
    })

}

function postDelete(req, res) {

    cartObject.deleteItem(req.body.productId, req.session.userId).then(() => {

        res.redirect("/cart")

    }).catch(err => res.redirect("/errors") )

}

function postDeleteAll(req, res){

    cartObject.delete_all_item(req.session.userId).then(() => {

        res.redirect("/cart")

    }).catch(err => res.redirect("/errors") )

}

function postOrderAll(req, res) {

    cartObject.order_all_items(req.session.userId).then(carts => {

        req.flash("productsInfo", carts)

        res.redirect("/cart/verify-orders")

    }).catch(err => res.redirect("/errors") )

}

module.exports = {
    getCartsByUserId,
    postCart,
    postDelete,
    putSave,
    postDeleteAll,
    postOrder,
    postOrderAll,
    getVerifyOrdersPage
}