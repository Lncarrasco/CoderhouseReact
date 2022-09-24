import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {


  return (
    <div>

      <div className='row col-12'>

        {data.length ? (data.map((item) => <Item key={item.id} items={item} />)
        ) : (
          <h3>Cargando productos...</h3>
        )}
      </div>
    </div>


  )
};

export default ItemList;
