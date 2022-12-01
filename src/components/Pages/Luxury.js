/** @format */
import { Row, Col } from "react-bootstrap";
import React from "react";
import ProductStore from "../Store/ProductStore";
import ProdCard from "../Ui/ProdCard";
const Luxury = () => {
  return (
    <>
      <div align="center" className="g-4">
        Welcome to Luxury Store
      </div>
      <Row xs={1} md={3} className="p-10 m-7">
        {ProductStore.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProdCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Luxury;
