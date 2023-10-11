import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}

function cartReducer(cart, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            return [...cart, action.product];
        default:
            return cart;
    }
}

function addToCart(dispatch, product) {
    dispatch({ type: "ADD_TO_CART", product });
}
