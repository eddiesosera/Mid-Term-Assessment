import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Invoice from "./components/Invoice";
import Cart from "./components/Cart";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/invoice" exact component={Invoice} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
