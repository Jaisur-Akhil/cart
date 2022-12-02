/** @format */

import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import cartContext from "../Context/CartContext";
import { useContext } from "react";
const ProdCard = (props) => {
  const cart = useContext(cartContext);
  const productQuantity = cart.getProductQuantity(props.product.id);
  console.log(cart.items);
  return (
    <div>
      <Card className="m-1">
        <Card.Body>
          <Card.Img variant="top" src={props.product.img} />
          <Card.Title className="mt-3">{props.product.title}</Card.Title>
          <Card.Text>{props.product.price}</Card.Text>
          <Button
            varient="primary"
            onClick={() => cart.addtoCart(props.product.id)}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProdCard;
