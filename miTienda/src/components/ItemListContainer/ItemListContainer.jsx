import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsJson from "../../products.json";

function asyncMock(categoryId) {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   if (categoryId === undefined) {
    resolve(productsJson);
   } else {
    const productosFiltrados = productsJson.filter((item) => {
     return item.category === categoryId;
    });
    resolve(productosFiltrados);
   }
  }, 1000);
 });
}
export default function ItemListContainer() {
 const { categoryId } = useParams();
 const [products, setProducts] = useState([]);
 useEffect(() => {
  asyncMock(categoryId).then((res) => setProducts(res));
 }, [categoryId]);
 return (
  <main>
   <section className="item-list-container">
    {products.map((item) => (
     <h2 key={item.id}>{item.name}</h2>
     
    ))}
   </section>
  </main>
 );
}
