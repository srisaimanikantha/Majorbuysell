const express = require('express');
const router = express.Router();
// const { addProduct } = require('../controllers/product.controller');

// router.post('/add', addProduct);
const auth = require("../Middlewares/auth");
const upload = require("../Middlewares/upload");
const productController = require("../controllers/product.controller");

console.log(productController)

//==create product===
router.post("/",auth,upload.single("image"), productController.createProduct);

//======get all product====
router.get("/", productController.getAllProducts);

////====get product by id=====
router.get("/:id", productController.getProductById);

///====get my products====
router.get("/usr/my", auth, productController.getMyProducts);

////========update product=======
router.put("/:id", auth, upload.single("image"), productController.updateProduct);

//========delete product========
router.delete("/:id", auth, productController.deleteProduct);

router.get("/search/category", productController.searchByCategory);

module.exports = router;