import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

// Create a new context
const Context = createContext();

// Define the StateContext component to provide state and functions to child components
export const StateContext = ({ children }) => {
  // Define state variables
  const [showCart, setShowCart] = useState(false); // To control the visibility of the cart
  const [cartItems, setCartItems] = useState([]); // To store items in the cart
  const [totalPrice, setTotalPrice] = useState(0); // To calculate the total price of items in the cart
  const [totalQuantities, setTotalQuantities] = useState(0); // To calculate the total quantity of items in the cart
  const [qty, setQty] = useState(1); // To manage the quantity of a product to add to the cart

  let foundProduct;
  let index;

  // Function to add a product to the cart
  const onAdd = (product, quantity) => {
    // Check if the product is already in the cart
    const checkProductInCart = cartItems.find((item) => item._id === product._id);

    // Update total price and total quantities
    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });

      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with the specified quantity
      product.quantity = quantity;
      setCartItems([...cartItems, { ...product }]);
    }

    // Show a success notification
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  // Function to remove a product from the cart
  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    // Update total price and total quantities
    setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity);
    setCartItems(newCartItems);
  };

  // Function to toggle the quantity of a cart item
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === 'inc') {
      // Increase quantity
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === 'dec') {
      // Decrease quantity if it's greater than 1
      if (foundProduct.quantity > 1) {
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  // Function to increase the quantity
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Function to decrease the quantity, but it won't go below 1
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  // Provide the state and functions to child components using the Context.Provider
  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// Custom hook to access the context from child components
export const useStateContext = () => useContext(Context);
