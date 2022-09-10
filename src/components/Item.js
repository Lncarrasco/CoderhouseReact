import React from 'react'
import { Link } from 'react-router-dom'
/* import ItemCount from './ItemCount' */


const Item = ({ producto, img, id}) => {
  return (
    <>
    <div className='col-12 col-sm-4 col-md-3 col-lg-3 mt-3'>
      <div className='card' style={{ width: "20rem" }}>
        <img src={img} alt={"Card image cap"} />
        <div className='card-body'>
          <h5>{producto}</h5>
          <Link to={`/indumentaria/${id}`}>

            <button type="button" className="btn btn-primary btn-md">Detalles del producto</button>

            </Link>          
        </div>
      </div>
      </div>
    </>

  )
}

export default Item