import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./barraNavegacion.css";
import { CartWidget } from "../CartWidget/CartWidget";
function ColorSchemesExample() {
  return (
    <header>
      <Navbar data-bs-theme="dark">
             <Link to="/">
          <img
            width={110}
            src=" https://img.freepik.com/vector-premium/ilustracion-flor_498740-7488.jpg?w=740"
          />
        </Link>
        <Container>
          <Nav className="enlace">
            <h3>
              <NavLink to="/category/flores">Arreglos Florales</NavLink>
              <NavLink to="/category/jardines">Diseño de jardines</NavLink>
              <NavLink to="/category/servicios">Servicios</NavLink>
              <NavLink to="/CartWidget"><CartWidget/></NavLink>
            </h3>
          </Nav>
        </Container>
      </Navbar>
      </header>
     );
}
export default ColorSchemesExample;
