const authObject = require("../models/auth.model");

function postSignup(req, res){

    let userInfo = req.body;

    authObject.createUserAccount(userInfo).then(() => {

        res.json(null);

    }).catch(err => {

        res.json(err);

    });

}

function getLogin(req, res){

    let email = req.query.email;

    let password = req.query.password;

    authObject.login(email, password).then(userInfo => {

        res.json(userInfo);

    }).catch(err => {

        res.json(err);

    });

}

module.exports = {postSignup, getLogin};