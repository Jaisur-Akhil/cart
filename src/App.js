/** @format */

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Ui/Navbar";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Success from "../src/components/Pages/Success";
import Cancel from "./components/Pages/Cancel";
import Luxury from "./components/Pages/Luxury";
import { CartProvider } from "./components/Context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <Container>
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Luxury />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </>
  );
}

export default App;
