import React from "react";
import { useCart } from "../CartContext";

function Card({ product }) {
    const { addToCart } = useCart();

    const handleBuyClick = () => {
        addToCart(product);
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <p>Car Make: {product.carMake}</p>
            <p>Car Model: {product.carModel}</p>
            <p>Chassis Number: {product.chasisNumber}</p>
            <p>Year: {product.year}</p>
            <p>Part ID: {product.partId}</p>
            <button onClick={handleBuyClick}>Buy</button>
        </div>
    );
}

export default Card;
