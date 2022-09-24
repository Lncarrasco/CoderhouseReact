import React from "react";
import { Link } from "react-router-dom";


const Item = ({ items }) => {
	return (
		<div className='col-12 col-sm-4 col-md-3 col-lg-4' style={{objectFit: "cover"}}>
      <div className='card text-center mt-3'>

        <img className="card-img-top mx-auto d-block" src={items.img} alt={"img"} style={{maxHeight: "350px", maxWidth: "300px"}} />

        <div className='card-body'>
          <h5>{items.producto}</h5>
          <Link to={`/indumentaria/${items.id}`}>

            <button type="button" className="btn btn-outline-secondary btn-sm">Detalles del producto</button>

            </Link>          
        </div>
      </div>
      </div>
	);
};

export default Item;