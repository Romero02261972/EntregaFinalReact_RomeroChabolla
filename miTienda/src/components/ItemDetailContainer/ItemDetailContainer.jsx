import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsJson from '../../products.json';

function asyncMock(nameId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
     if (nameId === undefined) {
      resolve(productsJson);
     } else {
      const productosFiltrados = productsJson.filter((item) => {
       return item.name === nameId;
      });
      resolve(productosFiltrados);
     }
    }, 1000);
   });
  }
  export default function ItemDetailContainer () {
   const { nameId } = useParams();
   const [products, setProducts] = useState([]);
   useEffect(() => {
    asyncMock(nameId).then((res) => setProducts(res));
   }, [nameId]);
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

