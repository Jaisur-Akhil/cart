/** @format */

import React from "react";
import Button from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import getProductData from "../Store/ProductStore";

const CartLog = (props) => {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <div>
      <h3>{productData.title}</h3>
      <p>{quantity}</p>
      <p>Rs{(quantity * productData.price).toFixed(2)}</p>
      <Button size="sm" onClick={() => cart.deletee(id)}>
        Delete
      </Button>
      <hr></hr>
    </div>
  );
};

export default CartLog;
