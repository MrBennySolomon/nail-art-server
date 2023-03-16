const express        = require("express");
const routerProducts = express.Router();
const {
  getAllProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct}      = require("../controllers/productsController");

routerProducts.route("/").get(getAllProducts).post(createProduct);
routerProducts.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

module.exports = routerProducts;
