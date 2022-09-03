import React from 'react'
import ItemCount from './ItemCount'


const Item = ({ producto, img, precio, stock }) => {
  return (
    <>
    <div className='col-12 col-sm-4 col-md-3 col-lg-3 mt-3'>
      <div className='card' style={{ width: "20rem" }}>
        <img src={img} alt={"Card image cap"} />
        <div className='card-body'>
          <h5>{producto}</h5>
          <p>${precio}</p>
          <ItemCount stock={stock}/>
          
        </div>
      </div>
      </div>
    </>

  )
}

export default Item