import React from 'react'
import { useState } from 'react'
const ItemCount = () => {

    const [counter, setCounter] = useState(1)
    const onClick = () => {
        setCounter(counter - 1)
    }

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <div className='card' style={{ width: '200px'}}>
                {/* imagen */}
                <div className='card-body' >
                    <h5 className='d-inline-flex p-2'>Contador: {counter}</h5>
                    <button onClick={onClick} type="button" className="btn btn-primary" style={{width: '50%'}}> - </button>
                    <button onClick={handleClick} type="button" className="btn btn-primary" style={{width: '50%'}}> + </button>
                </div>
            </div>
        </>
    )

}

export default ItemCount

