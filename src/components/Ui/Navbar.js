/** @format */

import React from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
const NavbarComponent = () => {
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Luxury</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button>Cart 0 Items</Button>
        </Navbar.Collapse>
      </Navbar>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <ModalTitle>Shopping Cart</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <h1>This is modal Body</h1>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default NavbarComponent;
