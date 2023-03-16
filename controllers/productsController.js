const asyncHandler = require("express-async-handler");
const fs = require("fs");

//@desc Get all products
//@route GET /products
//@access public
const getAllProducts = asyncHandler(async (req, res) => {
  const productsJson = fs.readFileSync('./db/products.json');
  res.status(200).json(`${productsJson}`);
});

//@desc Create new product
//@route POST /products
//@access public
const createProduct = asyncHandler(async (req, res) => {
  const productsJson = fs.readFileSync('./db/products.json');
  const products = JSON.parse(productsJson);
  products.push(req.body);
  fs.writeFileSync('./db/products.json', JSON.stringify(products));
  res.status(201).json({message: "Product Added To DB"})
});

//@desc Get product
//@route GET /products/:id
//@access public
const getProduct = asyncHandler(async (req, res) => {
  const productsJson = fs.readFileSync('./db/products.json');
  const products = JSON.parse(productsJson);
  const product = products.find((prod) => Number(prod.id) === Number(req.params.id));
  res.status(200).json(`${JSON.stringify(product)}`);
});

//@desc Update product
//@route PUT /products/:id
//@access public
const updateProduct = asyncHandler(async (req, res) => {
  const productsJson = fs.readFileSync('./db/products.json');
  const products = JSON.parse(productsJson);
  const product = products.find((prod) => Number(prod.id) === Number(req.params.id));
  const filteredProducts = products.filter((prod) => Number(prod.id) !== Number(req.params.id));
  filteredProducts.push(req.body);
  fs.writeFileSync('./db/products.json', JSON.stringify(filteredProducts));
  res.status(200).json({message: `Update Product :  ${JSON.stringify(product)}`})
});

//@desc Delete product
//@route DELETE /products/:id
//@access public
const deleteProduct = asyncHandler(async (req, res) => {
  const productsJson = fs.readFileSync('./db/products.json');
  const products = JSON.parse(productsJson);
  const product = products.find((prod) => Number(prod.id) === Number(req.params.id));
  const filteredProducts = products.filter((prod) => Number(prod.id) !== Number(req.params.id));
  fs.writeFileSync('./db/products.json', JSON.stringify(filteredProducts));
  res.status(200).json({message: `Delete Product ${JSON.stringify(product)}`})
});

module.exports = 
{ getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct
};