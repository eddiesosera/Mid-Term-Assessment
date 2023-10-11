import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

function cartReducer(cart, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Add product to the cart
            return [...cart, action.product];

        case 'REMOVE_FROM_CART':
            // Remove product from the cart
            return cart.filter(product => product.id !== action.productId);

        case 'CLEAR_CART':
            // Clear the cart
            return [];

        default:
            return cart;
    }
}

function addToCart(dispatch, product) {
    dispatch({ type: 'ADD_TO_CART', product });
}

function removeFromCart(dispatch, productId) {
    dispatch({ type: 'REMOVE_FROM_CART', productId });
}

function clearCart(dispatch) {
    dispatch({ type: 'CLEAR_CART' });
}