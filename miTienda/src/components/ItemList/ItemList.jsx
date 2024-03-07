import React from 'react'
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className= "container"> 
    <h2>Productos</h2>
    <ul>
   {products.map((producto, index)=>(
    <Item key={index} producto={producto} />
   ))}
    </ul>
    </div>
  );
};

export default ItemList;
