import productosJSON from "../../productos.json";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { getFirestore, doc, getDoc, collection, getDocs } from "firebase/firestore";
//import "./styles.css";


const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productoRef = collection(db, "Productos");

    getDocs (productoRef).then((collection) => {
  const productos = collection.docs.map((doc) => {
    return doc.data();
  });
  setProducts (productos);
});
}, []);

return <ItemList products={products} />;
};

export default ItemListContainer;