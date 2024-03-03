import React from 'react'
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div className= "container"> 
    <h2>Productos</h2>
    <ul>
      {productos.map((producto)=>(
        <Item key={producto.id} producto={producto} />
      ))}
    </ul>
    </div>
  );
};

export default ItemList;
