const express = require("express");
const routes = express();

const ProductRoute = require("./product.route");
const InvoiceRoute = require("./invoice.route");

routes.use(ProductRoute);
routes.use(InvoiceRoute);

module.exports = routes