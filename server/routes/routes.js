const express = require("express");
const routes = express();

const ProductRoute = require("./product.route");

routes.use(ProductRoute);

module.exports = routes