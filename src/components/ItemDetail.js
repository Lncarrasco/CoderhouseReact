import React from 'react';
import ItemCount from './ItemCount'
const ItemDetail = ({ indumentarias }) => {
  return (
    <div className='row g-0'>
      <div className='col-md-4'>
        <img src={indumentarias.img} alt={"Card image cap"} className='img-fluid rounded-start' />
      </div>
      <div className='col-md-8 '>
        <div className='card-body'>
          <h5 className='card-title text-center'>{indumentarias.producto}</h5>
          <p className='card-text text-center'>{indumentarias.divisa}{indumentarias.precio}</p>
          <ItemCount stock={indumentarias.stock} />
          <hr className='solid' style={{ 'width' : 'auto' }} />
          <p className='card-text'>Detalles:{indumentarias.descripcion}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail