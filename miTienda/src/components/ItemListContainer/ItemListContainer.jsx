import { useEffect, useState } from "react";
import "./styles.css"
import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore"; 
import { ItemList } from "../ItemList/ItemList";




const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    const db = getFirestore ();
    const productoRef = collection (db, "productos", "03GAnsrvWyQ2n8XebQPr" );
  getDocs(productoRef).then(collection => {
    if(documento.exists()){
      console.log(collection.docs())
    }
  }) 
  }, []);
  return <ItemList products ={products} />;
  
        };

export default ItemListContainer