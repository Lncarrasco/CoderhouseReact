import React from 'react'
import imagencarrousel from "./images/imgcarrousel.jpg"

export const Inicio = () => {
    return (<>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">

                    <img src={imagencarrousel} className="d-block w-100" alt="carrouselimg"/>

                </div>
            </div>
        </div>
    </>
    )
}
