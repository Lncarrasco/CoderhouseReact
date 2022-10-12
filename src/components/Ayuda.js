import React from 'react'

const Ayuda = () => {
    return (
        <div className='contenedor'>
            <div className='row'>
                <div className='col-12' style={{ "textAlign": "center" }}>
                    <h1 className='fw-bolder'>Contactenos</h1>
                    <p className='text-muted fw-light'>Te detallamos nuestros canales de contacto para que podamos responder a tus consultas.</p>
                </div>

            </div>

            <div className='row'>
                <div className='col mt-5'>
                    <h5 className=''>Consultas sobre tu pedido</h5>
                    <p>Si tenés algun inconveniente o consulta sobre tu compra podes comunicarte con nosotros por correo electrónico a shop@eclipsei.com o por Whatsapp al (011) 5451-XXXX. Intentamos responder lo más rápido posible a todas nuestras consultas.

                        Nuestro horario de atención es de Lunes a Viernes, de 10 a 18 hs. (Excepto días Feriados). Intentamos responder lo más rápido posible a todas nuestras consultas.</p>
                </div>
                <div className='col mt-5'>
                    <h5 className=''>Propuestas Comerciales</h5>
                    <p>Para todo tipo de propuestas comerciales podes comunicarte con nosotros a info@eclipsei.com

                        No siempre tenemos tiempo de responder a todos los mensajes, pero leemos y agendamos todo.</p>
                </div>
            </div>

            <div className='row'>
                <div className='col mt-5'>
                    <h5 className=''>Cambios y devoluciones</h5>
                    <p>Si necesitas realizar un cambio ó queréis devolver un producto podes comunicarte con nosotros por Whatsapp al (011) 5451-XXXX, indicándonos el numero de pedido, nombre y motivo de cambio o devolución.</p>
                </div>
                <div className='col '>
                    <h5 className=''>Como lo estamos haciendo?</h5>
                    <p>Intentamos mejorar día a día en todas las areas de nuestra empresa, tu opinión nos ayuda a crecer. Envíanos tus comentarios a info@eclipsei.com.

                        (Leemos todos los mensajes, pero no siempre podemos responder).</p>
                </div>
            </div>

            <div className='row'>
                <div className='col mt-5'>
                    <h5 className=''>Consultas sobre cómo comprar en nuestra tienda</h5>
                    <p>Si tenés dudas sobre el proceso de compra en nuestra tienda, podes contactarnos por Whatsapp al (011) 5451-XXXX.

                        Nuestro horario de atención es de Lunes a Viernes, de 10 a 18 hs. (Excepto días Feriados). Intentamos responder lo más rápido posible a todas nuestras consultas.</p>
                </div>
                <div className='col '>
                    <h5 className=''>Ventas Mayoristas</h5>
                    <p>Por el momento no realizamos ventas mayoristas, comercializamos únicamente a través de nuestra tienda online.</p>
                </div>
            </div>
        </div>

    )
}

export default Ayuda