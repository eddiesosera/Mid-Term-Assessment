import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card"; // Assuming Card is your component for displaying products

function Home() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: "", description: "", price: 0 });

    useEffect(() => {
        axios.get("/api/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    const handleAddProduct = () => {
        // Send a POST request to add the new product to the database
        axios.post("/api/products", newProduct).then((response) => {
            // Update the products list with the new product
            setProducts([...products, response.data]);
            // Reset the input fields
            setNewProduct({ name: "", description: "", price: 0 });
        });
    };

    return (
        <div>
            <div className="product-form">
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Product Description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="Product Price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddProduct}>Add Product</button>
            </div>
            {products.map((product) => (
                <Card key={product._id} product={product} />
            ))}
        </div>
    );
}

export default Home;
