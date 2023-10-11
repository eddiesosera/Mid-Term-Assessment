import React from "react";
import { useCart } from "../CartContext";

function Invoice() {
    const { cart } = useCart();

    return (
        <div>
            <h1>Invoice</h1>
            <ul>
                {cart.map((product) => (
                    <li key={product._id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Invoice;
