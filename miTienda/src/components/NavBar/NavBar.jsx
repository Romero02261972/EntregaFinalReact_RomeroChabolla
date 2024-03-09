import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <header>
      <CartWidget />
      <nav>
        <ul>
          <li>
            <Link to="/">Productos</Link>
          </li>
          <li>
            <Link to="/category/Flores">Flores</Link>
          </li>
          <li>
            <Link to="/category/Jardines">Jardines</Link>
          </li>
          <li>
            <Link to="/category/Servicios">Servicios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
