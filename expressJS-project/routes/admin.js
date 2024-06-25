const express = require("express");

//model
const Product = require("../models/product");

const router = express.Router();

router.post("/add-product", (req, res, next) => {
  const { product, price } = req.body;
  const newProduct = new Product(product, price);
  newProduct.save();
  res.status(201).json("Product added successfully!!");
});

module.exports = router;
