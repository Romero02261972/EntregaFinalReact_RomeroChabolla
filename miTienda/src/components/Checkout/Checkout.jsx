import { addDoc, collection, getFirestore } from 'firebase/firestore'

export default function Checkout() {
    function saveOrder(){
        const orden = {
            buyer: {
                nombre: "Luis",
                telefono: "79876897",
                email: "luis@luis.com"
            },
            items: [
                {
                    id: "1",
                    title: "gardenias",
                    precio: 5000
                }
            ],
            total: 5000
        }

        const db = getFirestore()

  const ordenesRef = collection(db, "order")

addDoc (ordenesRef, orden)
}

return (
<button onClick={saveOrder}>Guardar orden</button>
)
}
