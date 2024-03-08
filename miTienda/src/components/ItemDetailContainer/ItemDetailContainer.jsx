import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Button, Card } from "react-bootstrap";
import Count from "../ItemCount/ItemCount";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const db = getFirestore();
        const productoRef = doc(db, "Productos", id);
        const productoSnapshot = await getDoc(productoRef);

        if (productoSnapshot.exists()) {
          setProducto(productoSnapshot.data());
        } else {
          console.log("No se encontró el producto");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      {producto ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={producto.imageId} alt={producto.name} />
          <Card.Body>
            <Card.Title>{producto.name}</Card.Title>
            <Card.Text>
              <strong>Precio:</strong> ${producto.price}
            </Card.Text>
            <Card.Text>
              <strong>Descripción:</strong> {producto.description}
            </Card.Text>
            <Card.Text>
              <strong>Categoría:</strong> {producto.category}
            </Card.Text>
            <Card.Text>
              <strong>Stock:</strong> {producto.stock}
            </Card.Text>
            <Count stock={producto.stock} />
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando detalle del producto...</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
