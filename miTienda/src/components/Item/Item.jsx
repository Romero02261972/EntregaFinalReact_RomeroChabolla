import React from 'react'
import "./Item.css"

const Item = ({ producto }) => {
  return (
    <li>
      <div className="product-card">
             <div className="product-details">
          <div className="product-image">
            <img className=
              "size" src={producto.imageId} />
          </div>
          <h3 className="product-name">{producto.name}</h3>
          <p className="product-description">{producto.description}</p>
          <div className="price-stock">
            <p className="product-price">${producto.price}</p>
            <p className="product-stock">Stock: {producto.stock}</p>
          </div>
          <p className="category-id">Categoría: {producto.category}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;