import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

import "./styles.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { category } = useParams ();

  useEffect(() => {
    const fetchProducts= async ()=> {
    const db = getFirestore();
    
    let productoRef;
    if (!category) {
      productoRef= collection(db, "Productos");
    } else {

      productoRef = query( collection(db, "Productos"), where ("category", "==", category));
    }
        const snapshot = await getDocs(productoRef);
         const productos = snapshot.docs.map((doc)=> doc.data());

      setProducts(productos);
    };
    fetchProducts();
    }, [category]);


return <ItemList products={products} />;
};

export default ItemListContainer;