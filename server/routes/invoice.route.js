const express = require("express");
const router = express();

const InvoiceSchema = require("../models/invoice.model");

router.post("/api/createInvoice", async (req, res) => {
    try {
        const invoice = new InvoiceSchema({ ...req.body });
        const savedInvoice = await invoice.save();
        res.json(savedInvoice);
    }
    catch (error) {
        console.error("Error creating invoice:", error); // Log the error for debugging
        res.status(500).json({ error: 'Error creating invoice' });
    }
});

// Read All Invoices
router.get("/api/getInvoices", async (req, res) => {
    const findInvoices = await InvoiceSchema.find()
    res.json(findInvoices)
});

// Get Single Invoice
router.get("/api/getInvoice/:id", async (req, res) => {
    const findInvoice = await InvoiceSchema.findById(req.params.id);
    res.json(findInvoice);
});

// Update Single Invoice
router.patch("/api/updateInvoice/:id", async (req, res) => {
    try {
        // Create an object containing the fields to update (excluding _id)
        const updatedFields = { ...req.body };
        delete updatedFields._id; // Remove _id if it's present in the request body

        // Update the Invoice document by ID
        const result = await InvoiceSchema.updateOne({ _id: req.params.id }, { $set: updatedFields });

        if (result.nModified === 0) {
            return res.status(404).json({ error: "Invoice not found or no changes made." });
        }

        res.json({ message: "Invoice updated successfully." });
    }
    catch {
        res.status(500).json({ error: "Error updating the Answer." });
    }

});

// Delete Invoice
router.delete("/api/deleteInvoice/:id", async (req, res) => {
    await InvoiceSchema.findByIdAndDelete(req.params.id)
        .then(response => res.json(response))
        .catch(error => res.status(500).json(error));
});

module.exports = router