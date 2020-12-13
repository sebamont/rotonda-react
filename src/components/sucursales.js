import React from 'react';
import {sucursalData} from '../sucursales';

export function Sucursales(props) {
  const sucursalesList = Object.keys(sucursalData[props.provincia]["sucursales"]).map((sucu) => 
    
      <a className={sucu===props.sucursal ? "nav-link active" : "nav-link"} data-toggle="pill" href="/"  role="tab"   key={sucu} title={sucu} onClick={props.handleSucursal}>{sucu}</a>
    
  )

  return (
    <div className="container pb-5 shadowed-whitesmoke" id="sucursales">
      <div className="d-none d-md-block row justify-content-center mb-3 pt-3">
          <h2 className="line-sides">Conocé nuestras&nbsp;<span className="fancy">Sucursales</span></h2>
        </div>
        <div className="d-md-none row justify-content-center mb-3 pt-3">
            <h2 className="line-sides"><span className="fancy">Sucursales</span></h2>
        </div>
        <div className="row">
            <div className="col-12 align-self-center">
              <h6 className="d-sm-none mb-3 font-italic">Primero elegí tu provincia:</h6>
              <ul className="nav nav-pills justify-content-around" role="tablist" aria-orientation="horizontal">
                <li className="nav-item dropdown">
                  <a className={props.provincia==="Salta Capital" || props.provincia==="Salta Interior" ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"} data-toggle="dropdown" href="/" >Salta</a>
                  <div className="dropdown-menu">
                    <a className={props.provincia === "Salta Capital" ? "dropdown-item active" : "dropdown-item"} href="/" data-toggle="pill" role="tab"  title="Salta Capital" onClick={props.handleProvincia}>Capital</a>
                    <a className={props.provincia === "Salta Interior" ? "dropdown-item active" : "dropdown-item"} href="/" data-toggle="pill" role="tab"  title="Salta Interior" onClick={props.handleProvincia}>Interior</a>
                  </div>  
                </li>
                <li className="nav-item">
                  <a className={props.provincia === "Jujuy" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Jujuy" onClick={props.handleProvincia}>Jujuy</a>
                </li>
                <li className="nav-item">
                  <a className={props.provincia === "Tucumán" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Tucumán" onClick={props.handleProvincia}>Tucumán</a>
                </li>
                <li className="nav-item">
                  <a className={props.provincia === "Santiago" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Santiago" onClick={props.handleProvincia}>Santiago</a>
                </li>
                <li className="nav-item">
                  <a className={props.provincia === "La Rioja" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="La Rioja" onClick={props.handleProvincia}>La Rioja</a>
                </li>
                <li className="nav-item">
                  <a className={props.provincia === "Catamarca" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Catamarca" onClick={props.handleProvincia}>Catamarca</a>
                </li>
              </ul>
              <hr />
            </div>
        </div>

        <div className="row mt-lg-3">
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
              <iframe src={sucursalData[props.provincia]["sucursales"][props.sucursal]["mapSrc"]} width="100%" height="250" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" id="sucursales-map" title="sucursalesMap"></iframe>
          </div>
        </div>

        <div className="container mt-3 sucursal-data">
          <div className="row">
            <div className="col-4 text-center justify-content-center">
                <img src="img/svg/map-location.svg" alt="location logo" className="img-fluid" />
                <address className="mt-2"> {sucursalData[props.provincia]["sucursales"][props.sucursal]["direccion"]} </address> 
            </div>
            <div className="col-4 text-center justify-content-center">
              <a href={"tel:"+sucursalData[props.provincia]["sucursales"][props.sucursal]["telefono"]}><img src="img/svg/smartphone-1.svg" alt="phone logo" className="img-fluid" /></a>
              <p className="mt-2">{sucursalData[props.provincia]["sucursales"][props.sucursal]["telefono"]}<br /> <small>{sucursalData[props.provincia]["sucursales"][props.sucursal]["aclaracionTel"]}</small></p>
            </div>
            <div className="col-4 text-center justify-content-center">
              <img src="img/svg/clock-1.svg" alt="clock logo" className="img-fluid" />
              <p className="mt-2">{sucursalData[props.provincia]["sucursales"][props.sucursal]["horario"]}</p>
            </div>
          </div>
        </div>
      </div>
  );
}