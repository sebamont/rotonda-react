import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useLocalStorage} from './functions/useLocalStorage'
import {sucursalData} from './sucursales'
import ScrollToTop from './components/scrollToTop';

//Componentes
import {RedesBar} from './components/redesBar';
import {Navbar} from './components/navbar';
import {HeaderCarousel} from './components/headerCarousel';
import {Newsletter} from './components/newsletter';
import {AnimatedWave} from './components/animatedWave';
import {MarcasCarousel} from './components/marcasCarousel';
import {Footer} from './components/footer';

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
        <Navbar />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
