import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import { doc, getFirestore, getDoc, collection, getDocs, query, where } from "firebase/firestore";

//import "./styles.css";



const ItemDetailContainer = ()=> {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const db = getFirestore();
    const docRef = doc(db, "Productos", id);
    getDoc(docRef)
    .then((resp)=>{
      setItem(
        { ...resp.data(), id: resp.id}
      );
    })
  }, [id])
  return(
    <div>
      {item && <ItemList item = {item}/>}
    </div>
  )
}

export default ItemDetailContainer






/*const [products, setProducts] = useState([]);
const category = "Flores"
useEffect(()=> {
  const db = getFirestore();

  const productoRef = query(collection(db, "Productos"), where("category", "==", category));
  getDocs(productoRef).then((collection) => {
    const productos = collection.docs.map((doc)=>{
      return doc.id();
    });
    setProducts(productos);
  });
}, []);

return <ItemList products={products} />;

};

export default ItemDetailContainer;
*/
