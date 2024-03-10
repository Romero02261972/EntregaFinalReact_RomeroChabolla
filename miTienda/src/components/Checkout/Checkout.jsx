import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export default function Checkout({ cart }) {
  const [buyer, setBuyer] = useState({ nombre: '', apellido: '', email: '' });
  const [savedOrder, setSavedOrder] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBuyer({ ...buyer, [name]: value });
  };

  const saveOrder = async () => {
    const orden = {
      buyer: buyer,
      items: cart,
      total: cart.reduce((total, item) => total + item.price * item.quantity, 0)
    };

    const db = getFirestore();
    const ordersRef = collection(db, 'orders');

    try {
      const docRef = await addDoc(ordersRef, orden);
      console.log('Orden guardada:', docRef.id);
      setSavedOrder(orden);
    } catch (error) {
      console.error('Error al guardar la orden:', error);
    }
  };

  return (
    <div>
      {savedOrder ? (
        <div>
          <h2>Orden Guardada</h2>
          <p>Nombre: {savedOrder.buyer.nombre}</p>
          <p>Apellido: {savedOrder.buyer.apellido}</p>
          <p>Email: {savedOrder.buyer.email}</p>
          <h3>Productos:</h3>
          {savedOrder.items.map((item) => (
            <div key={item.id}>
              <p>{item.title} - Cantidad: {item.quantity}</p>
              <p>Precio unitario: ${item.precio}</p>
            </div>
          ))}
          <p>Total: ${savedOrder.total}</p>
        </div>
      ) : (
        <div>
          <h2>Checkout</h2>
          <input type="text" name="nombre" placeholder="Nombre" value={buyer.nombre} onChange={handleInputChange} />
          <input type="text" name="apellido" placeholder="Apellido" value={buyer.apellido} onChange={handleInputChange} />
          <input type="email" name="email" placeholder="Email" value={buyer.email} onChange={handleInputChange} />
          <button onClick={saveOrder}>Guardar Orden</button>
        </div>
      )}
    </div>
  );
}
