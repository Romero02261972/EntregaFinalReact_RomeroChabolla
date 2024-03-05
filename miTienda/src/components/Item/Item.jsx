import React from 'react'
import "./Item.css"

const Item = ({ product }) => {
  return (
    <li>
      <div className="product-card">
          <div className="product-details">
          <div className="product-image">
            <img className =
           "size" src={product.image} />
          </div>
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="price-stock">
            <p className="product-price">${product.price}</p>
            <p className="product-stock">Stock: {product.stock}</p>
          </div>
          <p className="category-id">Category ID: {product.category}</p>
        </div>
      </div>
    </li>
  );
};

export default Item;