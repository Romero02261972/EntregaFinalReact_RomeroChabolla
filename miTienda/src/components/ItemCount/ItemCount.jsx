import { useState } from "react"
import Checkout from "../Checkout/Checkout";

const Count = ({stock}) => {
    const [count, setCount]= useState(1)
    const agregar = () => {
        if (count < stock) {
        setCount (count +1);
        } else (
            console.log ("No hay suficientes artículos")
        )
    };
    const vaciar = () => {
        setCount (0)
    }
    const quitar = () => {
        if (count >0)
        setCount (count -1)
    }

    return (
        <div>
    <h5>agregar al carrito </h5>
    <h5>{count}</h5>

<button onClick={agregar} disabled = {count === stock}>agregar</button>
<button onClick={quitar}>quitar</button>
<button onClick={vaciar}>vaciar el carrito</button>
<Checkout/>


        </div>
    )
}
export default Count
