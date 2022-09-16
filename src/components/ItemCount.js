import React from 'react'
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [counter, setCounter] = useState(initial)
    
    const disminuir = () => {
        setCounter(counter - 1)
    }

    const incrementar = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className='card'>

                <div className='card-body d-flex justify-content-center'>

                    <button disabled={counter == 1} onClick={disminuir} type="button" className="btn btn-secondary" style={{ "width": '50px' }}> - </button>

                    <div>
                        <h5 style={{ 'textAlign': 'center', 'margin': '0 20px' }}>
                            {counter}
                        </h5>
                    </div>

                    <button disabled={counter == stock} onClick={incrementar} type="button" className="btn btn-primary" style={{ "width": '50px' }}> + </button>

                    <button disabled={stock <= 0} onClick={() => onAdd(counter)} type="button" className="btn btn-primary" style={{ "width": '50%', 'marginLeft': '10px' }}> Comprar </button>

                </div>

            </div>
        </>
    )

}

export default ItemCount