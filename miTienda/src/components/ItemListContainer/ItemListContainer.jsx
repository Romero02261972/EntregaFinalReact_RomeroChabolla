import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const db = getFirestore();
        let productosRef = collection(db, "Productos");

        if (category) {
          productosRef = query(productosRef, where("category", "==", category));
        }

        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <div>
      <h2>Listado de Productos</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/item/${producto.id}`}>
              <div>
                <img src={producto.imageId} alt={producto.name} />
                <p>{producto.name}</p>
                <p>Precio: ${producto.price}</p>
                <p>Stock: {producto.stock}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
