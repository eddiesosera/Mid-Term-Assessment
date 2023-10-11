import React, { useState, useEffect } from 'react';
import { useCart } from './cart';

function Home() {
    const { cart, addToCart } = useCart();

    const handleBuyClick = product => {
        addToCart(product);
    };

    useEffect(() => {
        // Fetch products from the API and set them in the state
    }, []);

    return (
        <div>
            {products.map(product => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Home;