import React from 'react'

const Header = () => {
  
  return (
    <div>
        <header>
    <nav className="navbar navbar-expand-md  mb-4">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0 mt-2">
                    <li className="nav-item">
                        <a className="nav-link  px-4 py-1 " aria-current="page" href="index.php">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-4 py-1  " href="sobre-mi.php">Sobre mí</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-4 py-1 " href="proyectos.php">Proyectos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-4 py-1  " href="contacto.php">Contacto</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <a className="btn-rojo " href="CV/CV_Dante_Roldan.pdf" download="CV_Dante_Roldan">Descargar mi CV <i className="fa-solid fa-download"></i></a>
                </div>
            </div>
        </div>
    </nav>
</header>
    </div>
  )
}

export default Header;