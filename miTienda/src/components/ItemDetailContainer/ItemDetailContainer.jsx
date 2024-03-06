import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {getFirestore, query, collection, where, getDocs} from "firebase/firestore";

const ItemDetailContainer = ()=> {
const [products, setProducts] = useState([]);
const category = "Flores"
useEffect(()=> {
  const db = getFirestore();

  const productoRef = query(collection(db, "Productos"), where("category", "==", category));
  getDocs(productoRef).then((collection) => {
    const productos = collection.docs.map((doc)=>{
      return doc.data();
    });
    setProducts(productos);
  });
}, []);

return <ItemList products={products} />;

};

export default ItemDetailContainer;

