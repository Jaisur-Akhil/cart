/** @format */

import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
import CartContext from "../Context/CartContext";
import CartLog from "./CartLog";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  console.log(productsCount, "this is product count data");
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Luxury</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productsCount} Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Shopping Cart</ModalTitle>
        </ModalHeader>
        <ModalBody>
          {productsCount > 0 ? (
            <>
              <p>Items in your Cart </p>
              {cart.items.map((currentProduct, idx) => (
                <h1>
                  {/* {currentProduct.title} {currentProduct.id} */}
                  <CartLog
                    key={idx}
                    id={currentProduct.id}
                    quantity={currentProduct.quantity}
                  />
                </h1>
              ))}
              <h1>Total : {cart.getTotalCost().toFixed(2)} </h1>
              <Button variant="success">Purchase Item</Button>
            </>
          ) : (
            <h1>Shop and Come Back. We have exculsive product for you</h1>
          )}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
{
}
