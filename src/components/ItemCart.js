import React from 'react'
import { useCartContext } from '../context/CartContext'
import "./ItemCart.css"
const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    
      
      
        <div className="row g-0">
          <div className="col-md-4">
            <img src={product.img} alt={"imagen"} className='img-fluid' />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.producto}</h5>
              <p className="card-text">Cantidad: {product.quantity}</p>
              <p className="card-text">Precio: {product.precio}</p>
              <p className="card-text">Subtotal: ${product.quantity * product.precio}</p>
              <button onClick={() => removeProduct(product.id)} className="btn btn-secondary"><p className="card-text"><small >Eliminar</small></p></button>

            </div>
          </div>
        </div>
      
    
    
    
  )
}

export default ItemCart