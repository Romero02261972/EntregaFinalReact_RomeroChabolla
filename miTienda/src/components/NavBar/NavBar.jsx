import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from "react-router-dom";
import './barraNavegacion.css'

function ColorSchemesExample () {
  return (
    
    <header>
      <Navbar data-bs-theme="dark">
      <Link to="/">
        <img width={100} src=" https://img.freepik.com/vector-premium/ilustracion-flor_498740-7488.jpg?w=740"/>
      </Link>
        <Container>
          <Nav className="enlace">
           <h3>
          <NavLink to="/category/flores">Arreglo de flores</NavLink>
          <NavLink to="/category/jardines">Diseño de jardines</NavLink>
          <NavLink to="/category/servicios">Servicios</NavLink>
          </h3>
          
          </Nav>
        </Container>
      </Navbar>
      <h1>Productos y Servicios</h1>
      <br/>
      <nav>
    
      </nav>
    </header>
  );
}
export default ColorSchemesExample;
