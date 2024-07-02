const express = require("express");

//model
const { addProduct, deleteProduct } = require("../controllers/product");

const router = express.Router();

router.post("/add-product", addProduct);
router.delete("/delete-product/:id", deleteProduct);

module.exports = router;
