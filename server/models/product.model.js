const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

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
        type: String,
        default: uuidv4()
    },
    quantity: {
        type: Number,
        default: 50
    }
});

module.exports = mongoose.model("Product", ProductSchema)