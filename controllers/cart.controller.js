const cartObject = require("../models/cart.model");

function getCartsByUserId(req, res) {

    cartObject.getCartsByUserId(req.query.userId).then(carts => {

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

function deleteItem(req, res) {

    cartObject.deleteItem(req.params.cartId).then(() => {

        res.json(null);

    }).catch(err => console.log(err) );

}

function delete_all_items(req, res){

    cartObject.delete_all_item(req.params.userId).then(() => {

        res.json(null);

    }).catch(err => console.log(err) );

}

function postOrderAll(req, res) {

    cartObject.order_all_items(req.body.userId).then(carts => {

        res.json(carts);

    }).catch(err => console.log(err) );

}

module.exports = {
    getCartsByUserId,
    postCart,
    deleteItem,
    putSave,
    delete_all_items,
    postOrderAll
}