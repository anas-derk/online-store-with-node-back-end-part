const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: {
        type: Boolean,
        default: false
    }
});

const userModel = mongoose.model("user", userSchema);

const dbUrl = require("./DB_URL");

const DB_URL = dbUrl;

const bcrypt = require("bcryptjs");

function createUserAccount(userInfo) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return userModel.findOne({ email: userInfo.email });

        }).then(user => {

            // Check if user is exists

            if (user) {

                mongoose.disconnect();

                reject("The User is exists !!");

            } else return bcrypt.hash(userInfo.password, 10);

        }).then(cryptedPassword => {

            // create new user

            let newUser = new userModel({
                username: userInfo.userName,
                email: userInfo.email,
                password: cryptedPassword
            });

            return newUser.save();

        }).then(() => {

            mongoose.disconnect();

            resolve();

        }).catch(err => {

            mongoose.disconnect();

            reject(err);

        });
    });

}

function login(email, password) {

    return new Promise((resolve, reject) => {

        mongoose.connect(DB_URL).then(() => {

            return userModel.findOne({ email });

        }).then(user => {

            if (!user) {

                mongoose.disconnect();

                reject("There is no email matches This Email !!");

            } else {

                bcrypt.compare(password, user.password).then(passwordIsTrue => {

                    if (passwordIsTrue) {

                        mongoose.disconnect();

                        resolve(user);

                    } else {

                        mongoose.disconnect();

                        reject("Password is not true !!");

                    }

                });

            }

        });

    });

}

module.exports = { createUserAccount, login, userModel };