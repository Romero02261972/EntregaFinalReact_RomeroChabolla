import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsJson from '../../products.json';

function asyncMock(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = productsJson.find(item => item.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
}

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    asyncMock(productId)
      .then(res => setProduct(res))
      .catch(error => console.error('Error al obtener el producto:', error));
  }, [productId]);

  return (
    <>
    <Link to="/">
    <img width={100} src=" https://img.freepik.com/vector-premium/ilustracion-flor_498740-7488.jpg?w=740"/>
    </Link>
        <Container>
          <Nav className="enlace">
           <h3>
          <NavLink to="/category/flores">Arreglo de flores</NavLink>
          <NavLink to="/category/jardines">Diseño de jardines</NavLink>
          <NavLink to="/category/servicios">Servicios</NavLink>
          </h3>
          
          </Nav>
        </Container>
        </>
  );
}

export default ItemDetailContainer;
