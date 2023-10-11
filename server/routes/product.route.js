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

// Get Single Product
router.get("/api/getProduct/:id", async (req, res) => {
    const findProduct = await ProductSchema.findById(req.params.id);
    res.json(findProduct);
});

// Update Single Product
router.patch("/api/updateProduct/:id", async (req, res) => {
    try {
        // Create an object containing the fields to update (excluding _id)
        const updatedFields = { ...req.body };
        delete updatedFields._id; // Remove _id if it's present in the request body

        // Update the Product document by ID
        const result = await ProductSchema.updateOne({ _id: req.params.id }, { $set: updatedFields });

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Product not found or no changes made." });
        }

        res.json({ message: "Product updated successfully." });
    }
    catch {
        res.status(500).json({ error: "Error updating the Answer." });
    }

});

// Delete Product
router.delete("/api/deleteProduct/:id", async (req, res) => {
    await ProductSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

module.exports = router