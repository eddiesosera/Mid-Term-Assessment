import React, { useState } from "react";
import axios from "axios";
import { useCart } from "./cart";
import { CardForm } from "./cardForm";

function Card({ product }) {
    // const { addToCart } = useCart();
    const [isEditing, setIsEditing] = useState(false);
    // const [editedProduct, setEditedProduct] = useState({ ...product });

    const handleBuyClick = () => {
        // addToCart(product);
    };

    const handleUpdateClick = () => {
        setIsEditing(true);
    };

    // const handleSaveClick = () => {
    //     // Send a PUT request to update the product in the database
    //     axios.put(`/api/products/${product.productId}`, editedProduct).then((response) => {
    //         // Update the product details with the edited product
    //         setEditedProduct({ ...response.data });
    //         setIsEditing(false);
    //     });
    // };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setEditedProduct({
    //         ...editedProduct,
    //         [name]: value,
    //     });
    // };

    return (
        <div style={{ display: 'flex', gap: '20px' }}>

            <img style={{ width: '50px', height: '50px' }} src={product?.image} />
            <h3>{product?.name}</h3>
            <p>Car Make: {product?.carMake}</p>
            <p>Car Model: {product?.carModel}</p>
            <p>Chassis Number: {product?.chassisNumber}</p>
            <p>Year: {product?.year}</p>
            <p>Part ID: {product?.partId}</p>

            {/* {isEditing ? ( */}
            {/* <button onClick={handleSaveClick}>Save</button> */}
            {/* ) : ( */}
            <button onClick={e => handleUpdateClick()}>Update</button>
            {/* )} */}
            <button onClick={e => handleBuyClick()}>Buy</button>
        </div>
    );
}

export default Card;
