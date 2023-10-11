const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema({
    invoice_item: [{
        userId: {
            type: String
        },
        productId: {
            type: String
        },
        quantity: {
            type: String
        }
    }]
});

module.exports = mongoose.model("Product", InvoiceSchema)