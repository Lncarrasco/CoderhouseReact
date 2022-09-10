import React from 'react'
import { useState } from 'react'



const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1)
    const onClick = () => {
        setCounter(counter - 1)
    }

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className='card'>
                <div className='card-body d-flex justify-content-center'>
                    <button disabled={counter==1} onClick={onClick}  type="button" className="btn btn-secondary" style={{"width" : '50px'}}> - </button>
                    <div><h5 style={{'text-align' : 'center', 'margin' : '0 20px' }}> {counter} </h5></div>
                    <button disabled={counter==stock} onClick={handleClick} type="button" className="btn btn-primary" style={{"width" : '50px'}}> + </button>
                    <button type="button" className="btn btn-primary" style={{"width" : '50%', 'margin-left' : '10px'}}> Comprar </button>
                </div>
            </div>
        </>
    )

}

export default ItemCount