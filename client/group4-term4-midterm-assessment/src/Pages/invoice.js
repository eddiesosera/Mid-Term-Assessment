import React, { useState } from 'react';
import { useCart } from './cart';

function Invoice() {
    const { cart, clearCart } = useCart();

    return (
        <div>
            {cart.map(product => (
                // Display selected products here
                <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
}

export default Invoice;