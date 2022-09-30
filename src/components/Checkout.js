import React, { useState } from 'react'
import { useCartContext } from '../context/CartContext'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from 'sweetalert2'

const Checkout = () => {
    const { cart, totalPrice, clearCart } = useCartContext();

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    let order = {
        buyer: {
            nombre: name,
            correo: email,
            telefono: phone
        },

        items: cart.map((product) => ({
            id: product.id,
            producto: product.producto,
            price: product.precio,
            quantity: product.quantity,
        })),

        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order).then(({ id }) => {
            console.log(id)
            Swal.fire(
                '¡Has realizado con exito el pedido!',
                `Código del pedido: ${id} por el monto total de $ ${totalPrice()}.`,
                'success'
            )
            clearCart()
        }
        )

    }


    return (
        <div className='row col-12'>
            <div>
            <div className='col-lg-4'>
                <div className="card text-center" style={{ "margin": "30px 0px 0px 25px" }}>

                    <div className="card-body">
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default"></span>
                            <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="nombre" className="input-group-text"></input>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default"></span>
                            <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="e-mail" className="input-group-text"></input>
                        </div>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="inputGroup-sizing-default"></span>
                            <input onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder="telefono" className="input-group-text"></input>
                        </div>
                        <div class="input-group mb-3">
                            <button onClick={handleClick} class="btn btn-outline-primary">FINALIZAR COMPRA</button>

                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>



    )
}

export default Checkout