import React from 'react';
import {Link} from 'react-router-dom';

export function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg fixed-top pt-3">
      
          <div className="container d-none d-lg-inline-flex justify-content-around">
            <ul className="navbar-nav" id="nav-left">
              <li className="nav-item ml-5"><Link to="/ofertas" className="nav-link text-uppercase font-weight-bold">Ofertas</Link></li>
              <li className="nav-item ml-5"><Link to="/nosotros" className="nav-link text-uppercase font-weight-bold">Sobre Nosotros</Link></li>
            </ul>

            <div className="navbar-logo text-center mx-1">
              <Link to="/" className="navbar-brand"><img src="img/logo_central_VACA.png" alt="La Rotonda" className="img-fluid" id="mainLogo" /></Link>
            </div>

            <ul className="navbar-nav" id="nav-left">
              <li className="nav-item ml-5"><Link to="/contacto" className="nav-link text-uppercase font-weight-bold">Contacto</Link></li>
              <li className="nav-item ml-5"><Link to="/curriculum" className="nav-link text-uppercase font-weight-bold">Trabajá con Nosotros</Link></li>
            </ul>
          </div>

    
          <div className="container d-lg-none py-1">
            <Link to="/" className="navbar-brand text-uppercase font-weight-bold d-lg-none">La Rotonda</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-chevron-circle-down" id="navbar-toggler"></i>
              </button>
              
              <div id="navbarSupportedContent" className="collapse navbar-collapse">
                  <ul className="navbar-nav ml-auto d-lg-none">
                      <li className="nav-item"><Link to="/ofertas" className="nav-link text-uppercase font-weight-bold">Ofertas</Link></li>
                      <li className="nav-item"><Link to="/nosotros" className="nav-link text-uppercase font-weight-bold">Sobre Nosotros</Link></li>
                      <li className="nav-item"><Link to="/curriculum" className="nav-link text-uppercase font-weight-bold">Trabajá con Nosotros</Link></li>
                      <li className="nav-item"><Link to="/contacto" className="nav-link text-uppercase font-weight-bold">Contacto</Link></li>
                  </ul>
              </div>
          </div>
        </nav>
    )
}