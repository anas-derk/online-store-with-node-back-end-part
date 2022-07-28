const authRouter = require("express").Router();

const authController = require("../controllers/auth.controller");

authRouter.post("/signup", authController.postSignup);

authRouter.get("/login", authController.getLogin);

module.exports = authRouter;