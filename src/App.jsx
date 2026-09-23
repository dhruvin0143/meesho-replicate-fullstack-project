import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import our page components
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

// Import the CartProvider which holds our global state
import { CartProvider } from './context/CartContext';

function App() {
  return (
    /* 
      CartProvider wraps the entire application. 
      This means EVERY page and component inside it can access the cart data 
      without us needing to pass 'cartItems' down as props manually.
    */
    <CartProvider>
      {/* Router enables client-side routing (changing URLs without reloading the page) */}
      <Router>
        <div className="app-container">
          <main>
            {/* Routes acts as a switch, rendering only the component that matches the current URL */}
            <Routes>
              {/* Homepage route */}
              <Route path="/" element={<Home />} />
              {/* Cart page route */}
              <Route path="/cart" element={<Cart />} />
              {/* 
                Dynamic route: the ':id' is a URL parameter. 
                If the user goes to /product/5, '5' will be passed as the ID to ProductDetails.
              */}
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
