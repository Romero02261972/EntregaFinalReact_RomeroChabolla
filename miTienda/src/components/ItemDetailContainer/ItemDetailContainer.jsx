import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import  ItemCount  from "../ItemCount/ItemCount";
import Button from "react-bootstrap/esm/Button";


     
export default function ItemDetailContainer(props) {
  const { id } = useParams();
  const [producto, setproducto] = useState([]);
  useEffect(() => {
    
  }, [id]);
  return (
    <main>
      <h2 className="my-3 mx-auto text-center">
        {props.greeting}
        {producto.name}

      </h2>
      <section className="item-list-container">
        <Card
          className="mx-auto my-3"
          style={{ width: "40rem" }}
          key={producto.id}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={producto.image}
            />
            <Card.Text>
              Description: {producto.description}
              <br />
              Price: {producto.price}
              <br />
              Category: {producto.category}
              <br />
              Stock: {producto.stock}
            </Card.Text>
            <Button>
            <ItemCount>
              <h3>Contador</h3>
            </ItemCount>
            </Button>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}
