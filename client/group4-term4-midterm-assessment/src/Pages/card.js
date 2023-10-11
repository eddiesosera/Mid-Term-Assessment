import React, { useState } from "react";
import axios from "axios";
import { useCart } from "./cart";

function Card({ product }) {
    const { addToCart } = useCart();
    const [isEditing, setIsEditing] = useState(false);
    const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleBuyClick = () => {
        addToCart(product);
    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // Send a PUT request to update the product in the database
        axios.put(`/api/products/${product.productId}`, editedProduct).then((response) => {
            // Update the product details with the edited product
            setEditedProduct({ ...response.data });
            setIsEditing(false);
        });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    };

    return (
        <div>
            <h3>{isEditing ? <input type="text" name="name" value={editedProduct.name} onChange={handleInputChange} /> : editedProduct.name}</h3>
            <p>Car Make: {isEditing ? <input type="text" name="carMake" value={editedProduct.carMake} onChange={handleInputChange} /> : editedProduct.carMake}</p>
            <p>Car Model: {isEditing ? <input type="text" name="carModel" value={editedProduct.carModel} onChange={handleInputChange} /> : editedProduct.carModel}</p>
            <p>Chassis Number: {isEditing ? <input type="text" name="chassisNumber" value={editedProduct.chassisNumber} onChange={handleInputChange} /> : editedProduct.chassisNumber}</p>
            <p>Year: {isEditing ? <input type="text" name="year" value={editedProduct.year} onChange={handleInputChange} /> : editedProduct.year}</p>
            <p>Part ID: {isEditing ? <input type="text" name="partId" value={editedProduct.partId} onChange={handleInputChange} /> : editedProduct.partId}</p>

            {isEditing ? (
                <button onClick={handleSaveClick}>Save</button>
            ) : (
                <button onClick={handleUpdateClick}>Update</button>
            )}
            <button onClick={handleBuyClick}>Buy</button>
        </div>
    );
}

export default Card;
