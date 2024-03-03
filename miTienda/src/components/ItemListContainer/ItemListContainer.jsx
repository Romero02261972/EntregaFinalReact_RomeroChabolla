import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../main"
//import "./styles.css"


const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const category = useParams().category;

  useEffect(() => {

    const productosRef = collection(db, "Productos");
    const q = category ? query(productosRef, where("category", "==", category)) : productosRef;

    getDocs(q)
      .then((resp) => {

        setProductos(
          resp.docs.map((doc) => {
            return { ...doc.data(), id: doc.id }
          })
        )
  })
}, [category])

return (
<div>
  <ItemList productos={productos} titulo={titulo} />;
</div>
)
}

export default ItemListContainer