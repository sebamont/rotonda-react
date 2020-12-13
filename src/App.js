import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useLocalStorage} from './functions/useLocalStorage'
import {sucursalData} from './sucursales'
import ScrollToTop from './components/scrollToTop';

//Componentes
import {RedesBar} from './components/redesBar';
import {HeaderCarousel} from './components/headerCarousel';
import {Newsletter} from './components/newsletter';
import {AnimatedWave} from './components/animatedWave';
import {MarcasCarousel} from './components/marcasCarousel';

//Componentes Switch
import {Sucursales} from './components/sucursales';
import {Ofertas} from './components/ofertas';
import {Resumen} from './components/resumen';
import {SobreNosotros} from './components/sobreNosotros';
import {Contacto} from './components/contacto';
import {Curriculum} from './components/curriculum';
import {NotFound} from './components/notFound';


function App() {
  const [provincia, setProvincia] = useLocalStorage("provincia","Salta Capital");
  const [sucursal, setSucursal] = useLocalStorage("sucursal","Tres Cerritos");

  const handleProvincia = (e) => {
    e.preventDefault();
    if (e.target.title !== provincia) {
      setProvincia(e.target.title);
      setSucursal(Object.keys(sucursalData[e.target.title]["sucursales"])[0]);
    }
  }

  const handleSucursal = (e) => {
    e.preventDefault();
    setSucursal(e.target.title);
  }

  

  return (
    <Router>
      <ScrollToTop />
      <div>
        <RedesBar />
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
        <HeaderCarousel />
        <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
        <Switch>
          <Route exact path="/">
            <Sucursales provincia={provincia} setProvincia={setProvincia} sucursal={sucursal} setSucursal={setSucursal} handleProvincia={handleProvincia} handleSucursal={handleSucursal} />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
            <Resumen />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
            <Newsletter />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
          <Route path="/ofertas">
            <Ofertas provincia={provincia} setProvincia={setProvincia} sucursal={sucursal} setSucursal={setSucursal} handleProvincia={handleProvincia} handleSucursal={handleSucursal} />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
            <Newsletter />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
          <Route path="/nosotros">
            <SobreNosotros />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
          <Route path="/curriculum">
            <Curriculum />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
          <Route path="/contacto">
            <Contacto />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
          <Route path="*">
            <NotFound />
            <div className="container-fluid my-4 my-md-5"></div> {/* Separador de secciones */}
          </Route>
        </Switch>

        <AnimatedWave />
        <MarcasCarousel />

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

      </div>
    </Router>
  );
}

export default App;
