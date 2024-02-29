import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import  ItemCount  from "../ItemCount/ItemCount";

function asyncMock(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id);
      console.log(typeof id);
      if (id === undefined) {
        resolve(articulosJson[0]);
      } else {
        const articulosFiltrados = articulosJson.filter((item) => {
          return item.id === parseInt(id);
        });
        console.log(articulosFiltrados);
        resolve(articulosFiltrados[0]);
      }
    }, );
  });
}
export default function ItemDetailContainer(props) {
  const { id } = useParams();
  const [articulo, setarticulo] = useState([]);
  useEffect(() => {
    asyncMock(id).then((res) => setarticulo(res));
  }, [id]);
  return (
    <main>
      <h2 className="my-3 mx-auto text-center">
        {props.greeting}
        {articulo.name}

      </h2>
      <section className="item-list-container">
        <Card
          className="mx-auto my-3"
          style={{ width: "40rem" }}
          key={articulo.id}
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src={articulo.image}
            />
            <Card.Text>
              Description: {articulo.description}
              <br />
              Price: {articulo.price}
              <br />
              Category: {articulo.category}
              <br />
              Stock: {articulo.stock}
            </Card.Text>
            <ItemCount>
              <h3>Contador</h3>
            </ItemCount>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}
