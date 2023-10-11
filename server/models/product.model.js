const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
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
    }
});

module.exports = mongoose.model("Product", ProductSchema)