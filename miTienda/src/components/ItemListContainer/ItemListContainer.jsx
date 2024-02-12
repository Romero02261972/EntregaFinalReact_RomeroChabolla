import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsJson from "../../products.json";

function asyncMock(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === undefined) {
        resolve(productsJson);
      } else {
        const productosFiltrados = productsJson.filter((item) => {
          return item.category === id;
        });
        resolve(productosFiltrados);
      }
    }, 1000);
  });
}
export default function ItemListContainer(props) {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    asyncMock(id).then((res) => setProducts(res));
  }, [id]);
  return (
    <main>
      <h2 className="my-3 mx-auto text-center">
        {props.greeting}
        {id}
      </h2>
      <section className="item-list-container">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/item/${item.id}`}
            className="text-decoration-none text-success"
          >
            <h3>{item.name}</h3>
          </Link>
        ))}
      </section>
    </main>
  );
}
