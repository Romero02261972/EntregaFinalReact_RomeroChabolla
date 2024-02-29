import { useEffect, useState } from "react";
import "./styles.css"
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";
import  ItemList  from "../ItemList/ItemList";




const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const productoRef = collection(db, "productos");
    getDocs(productoRef).then(collection => {
      const productos = collection.docs.map((doc) => {
        return doc;
      })

      console.log();
    });
  }, []);
  return <ItemList products={products} />;
};

export default ItemListContainer