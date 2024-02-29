import React from 'react'
import Item from "../Item/Item"

const ItemList = ({products}) => {
  return (
    <div className= "container"> 
    <h2>Productos</h2>
    <ul>
      {products.map((product, index)=>(
        <Item key={index} product={product} />
      ))}
    </ul>
    </div>
  );
};

export default ItemList;
