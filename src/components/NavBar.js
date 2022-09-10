import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom' 
import logoTienda from "./images/logoNavbar.svg"


const logo = <img src={logoTienda} alt="logotienda" style={{width: '50px'}}/>

export const NavBar = () => {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    {logo}
                    <Link to={'/'}>Eclipse Indumentaria</Link>
                    {/* <a className="navbar-brand" href="#">Eclipse Indumentaria</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to={'/inicio'} className="nav-link active">Inicio</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Inicio</a> */}
                            </li>
                            <li className="nav-item">
                            <Link to={'/indumentaria'} className="nav-link active">Indumentaria</Link>
                                {/* <a className="nav-link active" href="#">Indumentaria</a> */}
                            </li>
                            <li className="nav-item">
                            <Link to={'/Accesorios'} className="nav-link active">Accesorios</Link>
                                {/* <a className="nav-link active" href="#">Accesorios</a> */}
                            </li>
                            <li className="nav-item">
                            <Link to={'/About'} className="nav-link active">About</Link>
                                {/* <a className="nav-link active" href="#">About</a> */}
                            </li>
                        </ul>
                    </div>

                </div>
                <CartWidget />
            </nav>
        </div>
        
        </>
    )
}