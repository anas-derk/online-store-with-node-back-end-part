// create express app

const app = require("express")();

// import and using cross origin resource sharing module for manipulate with requests from external links

const cors = require("cors");

app.use(cors());

// import and using body parser module for manipulate with form data

const bodyParser = require("body-parser");

app.use(bodyParser.json());

// import routers

const   homeRouter = require("./routes/home.route"),
        adminRouter = require("./routes/admin.route"),
        cartRouter = require("./routes/cart.route"),
        ordersRouter = require("./routes/orders.route"),
        authRouter = require("./routes/auth.route"),
        productInfoRouter = require("./routes/productInfo.route");

// use routers

app.use("/api/products", homeRouter);

app.use("/api/admin", adminRouter);

app.use("/api/cart", cartRouter);

app.use("/api/orders", ordersRouter);

app.use("/api/auth", authRouter);

app.use("/api/productInfo", productInfoRouter);

// create server and running it

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`The Server Is Running On: http://localhost:${port}`));