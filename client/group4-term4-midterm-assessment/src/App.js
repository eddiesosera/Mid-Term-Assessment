import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Invoice from "./Pages/invoice";
import Cart from "./Pages/cart";
import { CartProvider } from "./Pages/cart";



function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      {/* <CartProvider> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/cart" element={<useCart />} />
      </Routes>

      {/* </CartProvider> */}
    </div>
  );
}

export default App;
