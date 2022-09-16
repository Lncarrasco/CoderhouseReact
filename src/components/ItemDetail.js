import React, { useState } from 'react';
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ indumentarias }) => {
  /* const { product } = useProduct() */
  /*   const { addProduct } = useProduct() */

  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`)
    setGoToCart(true);
    addProduct(indumentarias, quantity);
  }

  /*   const addHandler = (event, name) => {
      addProduct(name)
      console.log(name)
    } */

  return (

    <div className='row g-0'>
      <div className='col-md-4'>
        <img src={indumentarias.img} alt={"Card image cap"} className='img-fluid rounded-start' />
      </div>
      <div className='col-md-8 '>
        <div className='card-body'>
          <h5 className='card-title text-center'>{indumentarias.producto}</h5>
          <p className='card-text text-center'>{indumentarias.divisa}{indumentarias.precio}</p>

          <hr className='solid' style={{ 'width': 'auto' }} />
          <p className='card-text'>Detalles:{indumentarias.descripcion}</p>

          {
            goToCart ? <Link to='/Cart'>

              <button type="button" className="btn btn-primary" style={{ "width": '50%', 'marginLeft': '10px' }}> Finalizar Compra </button>


            </Link> : <ItemCount initial={1} onAdd={onAdd} stock={indumentarias.stock} />
          }
          

        </div>

      </div>
    </div>
  )
}

export default ItemDetail