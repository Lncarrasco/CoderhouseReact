import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

const Cart = () => {

  const { cart, totalPrice, clearCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>El carrito se encuentra vacio.</p>
        <Link to="/" className="text-muted">Seguir comprando.</Link>
      </>

    );
  }


  return (
    <>
      <div className="contenedor row col-12">
        <div className="card mb-3 col-md-6">
          {cart.map(product => <ItemCart key={product.id} product={product} />)}

        </div>
          <div className='card mb-3 col-md-5'>
            <p>Total: ${totalPrice()}</p>
            <div>
            <button class="btn btn-outline-primary" onClick={clearCart}> VACIAR CARRITO </button>

            </div>
            <Link to="/cart/checkout"><button class="btn btn-outline-primary"> IR AL PAGO </button></Link>
          </div>

      </div>
    </>
  )
}

export default Cart