const express = require("express");

// model
const Product = require("../models/product");

const router = express.Router();

router.get("/products", (req, res, next) => {
  const products = Product.findAll();

  res.status(200).json({ products });
});
module.exports = router;
