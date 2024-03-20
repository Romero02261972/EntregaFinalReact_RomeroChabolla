import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import "./CartWidget.css";

export const CartWidget = () => {
  return (
          <FaShoppingBag className="btn-fix" />
  );
};

const carrito = () => {
  const {carrito, vaciarCarrito} = useContext(cartContext);
  const handleVaciar = () => {
    vaciarCarrito();
  }

  return (
    <div className="container">
      <h1 className="main-title">CartWidget</h1>
      {
        carrito.map((prod)=> (
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