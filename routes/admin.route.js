const adminRouter = require("express").Router();

const adminController = require("../controllers/admin.controller");

// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: (req, res, cb) => {
//         cb(null, "statics/images/products/addedProductsImages")
//     },
//     filename: (req, res, cb) => {
//         cb(null, Date.now() + "newProduct.jpg")
//     }
// });

// const upload = multer({storage: storage});

const productController = require("../controllers/productInfo.controller");

adminRouter.get("/add-product", adminController.getAddProductPage);

// adminRouter.post(
//     "/add-product",
//     upload.single('file'),
//     productController.postAddProduct
// );

adminRouter.get("/manage-orders", adminController.getManageOrdersPage);

adminRouter.post(
    "/manage-orders/order-status-edit",
    adminController.post_order_status_edit
);

adminRouter.get("/all-orders", adminController.getManageOrdersPage);

adminRouter.get("/pending-orders", adminController.getPendingOrders);

adminRouter.get("/sent-orders", adminController.getSentOrders);

adminRouter.get("/completed-orders", adminController.getCompletedOrders);

module.exports = adminRouter;