import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom' 
import logoTienda from "./images/logoNavbar.svg"
import "../components/NavBar.css"


const logo = <img src={logoTienda} alt="logotienda" style={{width: '60px'}}/>

export const NavBar = () => {
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg mt-3">
                <div className="container-fluid">
                    <Link to={'/'}>{logo}</Link>
                    <h1>Eclipse</h1>
                    <p>indumentaria</p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to={'/inicio'} className="nav-link active">Inicio</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/indumentaria'} className="nav-link active">Indumentaria</Link>
                            </li>
                            <li className="nav-item">
                            <Link to={'/Ayuda'} className="nav-link active">Ayuda</Link>
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