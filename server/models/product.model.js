const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    image: {
        type: String
    },
    name: {
        type: String
    },
    carMake: {
        type: String
    },
    carModel: {
        type: String
    },
    chasisNumber: {
        type: String
    },
    year: {
        type: Number
    },
    partId: {
        type: String
    },
    quantity: {
        type: Number,
        default: 50
    }
});

module.exports = mongoose.model("Product", ProductSchema)