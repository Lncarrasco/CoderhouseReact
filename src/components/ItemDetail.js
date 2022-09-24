import React, { useState } from 'react';
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

 

  return (

    <div className='row g-0'>
      <div className='col-lg-5'>
        <img src={data.img} alt={"img"} className='img-fluid' />
      </div>
      <div className='col-md-7 '>
        <div className='card-body'>
          <h5 className='card-title text-center'>{data.producto}</h5>
          <p className='card-text text-center'>Precio: $ {data.precio}</p>

          <hr className='solid' style={{ 'width': 'auto' }} />
          <p className='card-text'>Detalles: {data.descripcion}</p>

          {
            goToCart ? <Link to='/Cart'>

              <button type="button" className="btn btn-secondary" style={{ "width": '100%', 'marginLeft': '10px' }}> Finalizar Compra </button>


            </Link> : <ItemCount initial={1} onAdd={onAdd} stock={data.stock} />
          }
          

        </div>

      </div>
    </div>
  )
}

export default ItemDetail