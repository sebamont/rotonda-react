import React, {useState} from 'react';
import {sucursalData} from './sucursales'

function App() {
  const [provincia, setProvincia] = useState("Salta Capital");
  const [sucursal, setSucursal] = useState("Tres Cerritos");

  const handleProvincia = (e) => {
    e.preventDefault();
    setProvincia(e.target.title);
    if (e.target.title !== provincia) {
      setSucursal(Object.keys(sucursalData[e.target.title]["sucursales"])[0]);
    }
  }

  const handleSucursal = (e) => {
    e.preventDefault();
    setSucursal(e.target.title);
  }

  const sucursalesList = Object.keys(sucursalData[provincia]["sucursales"]).map((sucu) => 
    
      <a className="nav-link" data-toggle="pill" href="/"  role="tab"  aria-selected="false" key={sucu} title={sucu} onClick={handleSucursal}>{sucu}</a>
    
  )

  return (
    <div>
      <div className="d-none d-md-block row justify-content-center mb-3 pt-3">
          <h2 className="line-sides">Conocé nuestras &nbsp;<span className="fancy">Sucursales</span></h2>
        </div>
        <div className="d-md-none row justify-content-center mb-3 pt-3">
            <h2 className="line-sides"><span className="fancy">Sucursales</span></h2>
        </div>
        <div className="row">
            <div className="col-12 align-self-center">
              <h6 className="d-sm-none mb-3 font-italic">Primero elegí tu provincia:</h6>
              <ul className="nav nav-pills justify-content-around" role="tablist" aria-orientation="horizontal">
                <li className="nav-item dropdown">
                  <a className="nav-link active dropdown-toggle" data-toggle="dropdown" href="/" aria-selected="true">Salta</a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item active  " href="/" data-toggle="pill" role="tab" aria-selected="true" title="Salta Capital" onClick={handleProvincia}>Capital</a>
                    <a className="dropdown-item" href="/" data-toggle="pill" role="tab" aria-selected="false" title="Salta Interior" onClick={handleProvincia}>Interior</a>
                  </div>  
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" data-toggle="pill" role="tab" aria-selected="false" title="Jujuy" onClick={handleProvincia}>Jujuy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" data-toggle="pill" role="tab" aria-selected="false" title="Tucumán" onClick={handleProvincia}>Tucumán</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" data-toggle="pill" role="tab" aria-selected="false" title="Santiago" onClick={handleProvincia}>Santiago</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" data-toggle="pill" role="tab" aria-selected="false" title="La Rioja" onClick={handleProvincia}>La Rioja</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/" data-toggle="pill" role="tab" aria-selected="false" title="Catamarca" onClick={handleProvincia}>Catamarca</a>
                </li>
              </ul>
              <hr />
            </div>
        </div>

        <div className="row mt-lg-5">
          <div className="d-none d-lg-block col-lg-2">
            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
              {sucursalesList}
            </div>
          </div>
          <div className="col-12 d-lg-none">
            <h6 className="d-sm-none mb-3 font-italic">Ahora selecciona una sucursal:</h6>
            <div className="nav nav-pills justify-content-center" aria-orientation="horizontal">
              {sucursalesList}
            </div>
            <hr />
          </div>
          <div className="col-12 col-lg-10">
              <iframe src={sucursalData[provincia]["sucursales"][sucursal]["mapSrc"]} width="100%" height="250" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0" id="sucursales-map" title="sucursalesMap"></iframe>
          </div>
        </div>

        <div className="container mt-5 sucursal-data">
          <div className="row">
            <div className="col-4 text-center justify-content-center">
                <img src="img/svg/map-location.svg" alt="location logo" className="img-fluid" />
                <address className="mt-2"> {sucursalData[provincia]["sucursales"][sucursal]["direccion"]} </address> 
            </div>
            <div className="col-4 text-center justify-content-center">
              <a href="tel:+543875423222"><img src="img/svg/smartphone-1.svg" alt="phone logo" className="img-fluid" /></a>
              <p className="mt-2">{sucursalData[provincia]["sucursales"][sucursal]["telefono"]}<br /> <small>{sucursalData[provincia]["sucursales"][sucursal]["aclaracionTel"]}</small></p>
            </div>
            <div className="col-4 text-center justify-content-center">
              <img src="img/svg/clock-1.svg" alt="clock logo" className="img-fluid" />
              <p className="mt-2">{sucursalData[provincia]["sucursales"][sucursal]["horario"]}</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
