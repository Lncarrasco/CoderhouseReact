import React from 'react';
import Item from './Item';


const ItemList = ({ indumentarias }) => {
  return (
    <div>

      <div className='row justify-content-center'>

        {indumentarias.length ? (indumentarias.map((item) => <Item key={item.id} {...item} />)
        ) : (
          <h3>Cargando productos...</h3>
        )}
      </div>
    </div>


  )
}

export default ItemList
