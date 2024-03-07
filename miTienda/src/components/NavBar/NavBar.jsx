import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink} from "react-router-dom";
import "./barraNavegacion.css";
import { CartWidget } from "../CartWidget/CartWidget";

function NavBar() {
  return (
       <header>
      <Navbar data-bs-theme="dark">
             <NavLink to="/">
          <img
            width={110}
            src=" https://img.freepik.com/vector-premium/ilustracion-flor_498740-7488.jpg?w=740"
          />
        </NavLink>
        <Container>
          <Nav className="enlace">
            <h3>
              <NavLink to="Productos/Flores">Arreglos Florales</NavLink>
              <NavLink to="Productos/Jardines">Diseño de jardines</NavLink>
              <NavLink to="Productos/Servicios">Servicios</NavLink>
              <NavLink to="/CartWidget"><CartWidget/></NavLink>
            </h3>
          </Nav>
        </Container>
      </Navbar>
      </header>
     
     );
}
export default NavBar;
