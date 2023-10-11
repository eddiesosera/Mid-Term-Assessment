const express = require("express");
const router = express();

const ProductSchema = require("../models/product.model");

router.post("/api/createProduct", async (req, res) => {
    try {
        const product = new ProductSchema({ ...req.body });
        const savedProduct = await product.save();
        res.json(savedProduct);
    }
    catch (error) {
        console.error("Error creating product:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error creating product' });
    }
});

// Read All Products
router.get("/api/getProducts", async (req, res) => {
    const findProducts = await ProductSchema.find()
    res.json(findProducts)
});

module.exports = router