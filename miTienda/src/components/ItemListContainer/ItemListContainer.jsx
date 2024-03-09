import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import "./styles.css";

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
    <div className="container">
      <h2>Listado de Productos</h2>
      <div className="row row-cols-1 row-cols-md-3">
        {productos.map((producto) => (
          <div key={producto.id} className="col mb-4">
            <Link to={`/item/${producto.id}`}>
              <div>
                <img className="photoSize" src={producto.imageId} alt={producto.name} />
                <p>{producto.name}</p>
                <p>Precio: ${producto.price}</p>
                <p>Stock: {producto.stock}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
