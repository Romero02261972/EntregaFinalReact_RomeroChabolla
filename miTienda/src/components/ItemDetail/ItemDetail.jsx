import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div className="container">
      {producto ? (
        <div>
          <h2>{producto.name}</h2>
          <p>Precio: {producto.price}</p>
          <p>Descripción: {producto.description}</p>
        </div>
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
};

export default ItemDetail;
