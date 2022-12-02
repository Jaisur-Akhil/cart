/** @format */

import React, { useState } from "react";
import {
  Button,
  Container,
  Navbar,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Luxury</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart 0 Items</Button>
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
