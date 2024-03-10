import React, { useState } from 'react';
import Checkout from '../Checkout/Checkout';

const Count = ({ stock, product }) => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);

  const agregar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const guardarOrden = () => {
    if (count > 0) {
      const newCartItem = { ...product, quantity: count };
      setCart([...cart, newCartItem]);
      console.log('Orden guardada:', newCartItem);
      setCount(1);
    }
  };

  const vaciar = () => {
    setCart([]);
    setCount(0);
  };

  const quitar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h5>Agregar al carrito </h5>
      <h5>{count}</h5>

      <button onClick={agregar} disabled={count >= stock}>
        Agregar
      </button>
      <button onClick={quitar}>Quitar</button>
      <button onClick={vaciar}>Vaciar el carrito</button>
      <Checkout cart={cart} buyer={{ name: '', telefono: '', email: '' }} />
    </div>
  );
};

export default Count;

