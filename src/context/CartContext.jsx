import React, { createContext, useState, useEffect } from 'react';

// 1. Create the Context. This is like a global data store.
export const CartContext = createContext();

// 2. Create the Provider component. This will wrap our App.
export const CartProvider = ({ children }) => {
  // State to hold the array of items currently in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart based on its ID
      const existingItem = prevItems.find((item) => item.id === product.id);
      
      if (existingItem) {
        // If it exists, map through and increase the quantity of that specific item
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it doesn't exist, add the new product with a default quantity of 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.originalPrice * item.quantity, 0);
  };
  
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartDiscount = () => {
    return getCartSubtotal() - getCartTotal();
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        getCartCount,
        getCartSubtotal,
        getCartTotal,
        getCartDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
