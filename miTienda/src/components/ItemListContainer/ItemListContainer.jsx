import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Card } from "react-bootstrap";
import "./styles.css";

function ItemListContainer() {
  const [loading, setLoading] = useState(true);
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <div className="container">
      <h1 className="title">Bienvenidos a Mi Tienda Verde</h1>
      {loading ? ( // Si se están cargando los productos, muestra el mensaje de carga
        <p>Cargando productos...</p>
      ) : (
      <div className="row row-cols-1 row-cols-md-3">
        {productos.map((producto) => (
          <div key={producto.id} className="col mb-4">
            <Link to={`/item/${producto.id}`}>
              <Card style={{ width: "350px", marginLeft: 40}}>
                <img className="photoSize" src={`/${producto.imageId}`} alt={producto.name} />
               </Card>
           <p>{producto.name}</p>
            </Link>
          </div>
        ))}
      </div>
      )}
    </div>
  );
}

export default ItemListContainer;
