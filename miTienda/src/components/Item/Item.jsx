import React from 'react'

const Item = ({ producto }) => {
  return (
    <li>
      <div className="product-card">
        <img
          src=""
          alt={producto.name}
          className="product-image"
        />
        <div className="product-details">
          <div className="product-image">
            <img src={producto.image} />
          </div>
          <h3 className="product-name">{producto.name}</h3>
          <p className="product-description">{producto.description}</p>
          <div className="price-stock">
            <p className="product-price">${producto.price}</p>
            <p className="product-stock">Stock: {producto.stock}</p>
          </div>
          <p className="category-id">Category ID: {producto.category}</p>
        </div>
      </div>
    </li>
  );
};

export default Item