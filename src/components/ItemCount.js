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

                <div className='card-body d-flex justify-content-center '>
                    <div className='d-flex border'>

                        <button disabled={counter == 1} onClick={disminuir} type="button" className="btn btn-secondary" style={{}}> - </button>


                        <h5 style={{textAlign: "center", marginTop: "5px", marginLeft: "10px", marginRight: "10px" }}>
                            {counter}
                        </h5>


                        <button disabled={counter == stock} onClick={incrementar} type="button" className="btn btn-secondary" style={{}}> + </button>
                    </div>
                    <div>
                        <button disabled={stock <= 0} onClick={() => onAdd(counter)} type="button" className="btn btn-secondary" style={{marginTop: "1px"}}> Comprar </button>
                    </div>

                </div>

            </div>
        </>
    )

}

export default ItemCount