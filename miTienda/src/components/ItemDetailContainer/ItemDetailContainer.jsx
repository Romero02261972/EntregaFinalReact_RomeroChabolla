import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsJson from "../../products.json";
import Card from "react-bootstrap/Card";
function asyncMock(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id);
      console.log(typeof id);
      if (id === undefined) {
        resolve(productsJson[0]);
      } else {
        const productosFiltrados = productsJson.filter((item) => {
          return item.id === parseInt(id);
        });
        console.log(productosFiltrados);
        resolve(productosFiltrados[0]);
      }
    }, 1000);
  });
}
export default function ItemDetailContainer(props) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    asyncMock(id).then((res) => setProduct(res));
  }, [id]);
  return (
    <main>
      <h2 className="my-3 mx-auto text-center">
        {props.greeting}
        {product.name}
      </h2>
      <section className="item-list-container">
        <Card
          className="mx-auto my-3"
          style={{ width: "18rem" }}
          key={product.id}
        >
          {/* <Card.Img variant="top" src="https://picsum.photos/200/100" /> */}
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              Description: {product.description}
              <br />
              Price: {product.price}
              <br />
              Category: {product.category}
              <br />
              Stock: {product.stock}
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
    </main>
  );
}
