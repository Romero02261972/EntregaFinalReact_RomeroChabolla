import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget";
import "./styleBar.css"
import { GiFlowers } from "react-icons/gi";

function NavBar() {
  return (
    <Navbar className="styleBar"  >
      <GiFlowers className="logo" />
      <Container >
        <Link to="/" className="nav-link">
          <h2>Home</h2>
        </Link>
        <h2 >
          <Link to="/category/Flores" className="section" >Arreglos Florales</Link>
          <Link to="/category/Jardines" className="section" >Diseño de Jardines</Link>
          <Link to="/category/Servicios" className="section" >Otros Servicios</Link>
        </h2>
      </Container>
      <CartWidget />
    </Navbar>
  );
}
export default NavBar;
