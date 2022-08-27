import CartWidget from "./CartWidget"

export const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img src={require("./images/logo.svg").default} width="50" height="50" />
                    <a className="navbar-brand" href="#">Eclipse Indumentaria</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Indumentaria</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Accesorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Calzado</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <CartWidget />
            </nav>
        </div>
    )
}