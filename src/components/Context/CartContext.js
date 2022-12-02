/** @format */

import React from "react";
import { createContext, useState } from "react";

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addtoCart: () => {},
  removeFromCart: () => {},
  delete: () => {},
  getTotalCost: () => {},
});

export default CartContext;

export function CartProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  //{id : 1 . quantity :2}

  function getProductQuantity(id) {
    const quantity = cartProduct.find((product) => product.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addtoCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProduct([...cartProduct, { id: id, quantity: 1 }]);
    } else {
      setCartProduct([
        cartProduct.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      ]);
    }
  }

  function removeFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity == 1) {
      deletee(id);
    } else {
      setCartProduct();
    }
  }

  function deletee(id) {
    setCartProduct((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  const contextValue = {
    items: cartProduct,
    getProductQuantity,
    addtoCart,
    removeFromCart,
    deletee,
    getTotalCost,
  };

  return (
    <CardContext.Provider value={contextValue}>{children}</CardContext.Provider>
  );
}

//context (card, addToCart, removeCart)
//Provider-> gives your React App access to all the things in your context
