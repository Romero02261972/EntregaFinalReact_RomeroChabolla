import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
//import "./cartWidget.css";

export const CartWidget = () => {
  return (
    <Button id="cart" variant="success" className="ms-4 btn-fix">
      <FaShoppingBag className="text-light" />
      <Badge pill bg="secondary">
        9
      </Badge>
    </Button>
  );
};

const CartWidget = () => {
  const {cartWidget, precioTotal, vaciarCartWidget} = useContext(cartContext);
  const handleVaciar = () => {
    vaciarCartWidget();
  }

  return (
    <div className="container">
      <h1 className="main-title">CartWidget</h1>
      {
        cartWidget.map((prod)=> (
          <div key={prod.id}>
            <br />
            <h3>{prod.titulo}</h3>
            <p>Precio unit: ${prod.precio}</p>
            <p>Precio total: ${prod.precio * prod.cantidad}</p>
            <>Cant: {prod.cantidad}</>
            <br/>
          </div>
        ))
      }
    </div>
  )}

  export default CartWidget