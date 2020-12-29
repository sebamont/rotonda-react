import React from 'react';
import {Link} from 'react-router-dom';

export function Footer() {
    return(
        <footer className="pt-4 pb-2" id="footer">
          <div className="container">
            <div className="row">
              <div className="col-6 col-md">
                <h5>Medios de Pago</h5>
                <img className="mb-2" src="img/medios de pago/mercadopago.png" alt="" width="60" height="38" />
                <img className="mb-2" src="img/medios de pago/visa.png" alt="" width="60" height="38" />
                <img className="mb-2" src="img/medios de pago/mastercard.png" alt="" width="60" height="38" /> <br className="d-none d-lg-block" />
                <img className="mb-2" src="img/medios de pago/naranja.png" alt="" width="60" height="38" />
                <img className="mb-2" src="img/medios de pago/alimentar.png" alt="" width="60" height="38" />
                <img className="mb-2" src="img/medios de pago/cabal.png" alt="" width="60" height="38" />
              </div>
              <div className="col-6 col-md">
                <h5>Medios de Contacto</h5>
                <ul className="list-unstyled text-small mb-3">
                  <li><Link to="/contacto">Mandanos un Mail</Link></li>
                  <li><Link to="/curriculum">Dejanos tu Curriculum</Link></li>
                </ul>
                <h5 className="mt-3">Redes Sociales</h5>
                <a href="https://www.facebook.com/rotondamayorista/" target="_blank" className="facebook" rel="noreferrer"><i className="fab fa-facebook-f"></i></a> &nbsp; &nbsp; &nbsp; 
                <a href="https://www.instagram.com/rotondamayorista" className="instagram" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
              <div className="d-none d-md-block col-6 col-md">
                <h5>Navegación</h5>
                <ul className="list-unstyled text-small">
                  <li><Link to="/">Sucursales</Link></li>
                  <li><Link to="/ofertas">Ofertas</Link></li>
                  <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                </ul>
              </div>
              <div className="col-12 mt-md-0 col-md">
                <hr className="d-md-none" />
                <p className="text-small"><span className="fancy-light">La Rotonda Mayorista.</span> todos los derechos reservados. &copy; 2020 </p>
                <small className="d-none d-md-block text-small font-italic mt-5">Desarrollado por <a href="/"><span className="fancy-light">Curly Dev</span></a></small>
                <div className="text-right d-md-none">
                  <small className="text-small font-italic">Desarrollado por <a href="/"><span className="fancy-light">Curly Dev</span></a></small>
                </div>
              </div>
            </div>
          </div>
        </footer>
    )
}