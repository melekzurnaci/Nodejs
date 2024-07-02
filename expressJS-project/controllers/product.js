const Product = require("../models/product");

exports.addProduct = async (req, res, next) => {
  const { product, price } = req.body;
  const newProduct = new Product(product, price);
  try {
    await newProduct.save();
  } catch (error) {
    res.status(500).json("Something went wrong");
  }
  res.status(201).json("Product added successfully!!");
};

exports.getAllProducts = async (req, res, next) => {
  const products = Product.findAll();
  res.status(200).json({ products });
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  let result;

  try {
    result = await Product.deleteOne(Number(id));
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!" });
  }

  res.status(200).json(result);
};
