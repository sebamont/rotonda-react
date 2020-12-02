import React, {useState} from 'react';
import {sucursalData} from './sucursales'

//Guardar state en local storage (para que al refrescar la pagina se guarde la seleccion de provincia/sucursal)
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

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

  const sucursalesList = Object.keys(sucursalData[provincia]["sucursales"]).map((sucu) => 
    
      <a className={sucu===sucursal ? "nav-link active" : "nav-link"} data-toggle="pill" href="/"  role="tab"   key={sucu} title={sucu} onClick={handleSucursal}>{sucu}</a>
    
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
                  <a className={provincia==="Salta Capital" || provincia==="Salta Interior" ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"} data-toggle="dropdown" href="/" >Salta</a>
                  <div className="dropdown-menu">
                    <a className={provincia === "Salta Capital" ? "dropdown-item active" : "dropdown-item"} href="/" data-toggle="pill" role="tab"  title="Salta Capital" onClick={handleProvincia}>Capital</a>
                    <a className={provincia === "Salta Interior" ? "dropdown-item active" : "dropdown-item"} href="/" data-toggle="pill" role="tab"  title="Salta Interior" onClick={handleProvincia}>Interior</a>
                  </div>  
                </li>
                <li className="nav-item">
                  <a className={provincia === "Jujuy" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Jujuy" onClick={handleProvincia}>Jujuy</a>
                </li>
                <li className="nav-item">
                  <a className={provincia === "Tucumán" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Tucumán" onClick={handleProvincia}>Tucumán</a>
                </li>
                <li className="nav-item">
                  <a className={provincia === "Santiago" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Santiago" onClick={handleProvincia}>Santiago</a>
                </li>
                <li className="nav-item">
                  <a className={provincia === "La Rioja" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="La Rioja" onClick={handleProvincia}>La Rioja</a>
                </li>
                <li className="nav-item">
                  <a className={provincia === "Catamarca" ? "nav-link active" : "nav-link"} href="/" data-toggle="pill" role="tab"  title="Catamarca" onClick={handleProvincia}>Catamarca</a>
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
              <iframe src={sucursalData[provincia]["sucursales"][sucursal]["mapSrc"]} width="100%" height="250" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0" id="sucursales-map" title="sucursalesMap"></iframe>
          </div>
        </div>

        <div className="container mt-3 sucursal-data">
          <div className="row">
            <div className="col-4 text-center justify-content-center">
                <img src="img/svg/map-location.svg" alt="location logo" className="img-fluid" />
                <address className="mt-2"> {sucursalData[provincia]["sucursales"][sucursal]["direccion"]} </address> 
            </div>
            <div className="col-4 text-center justify-content-center">
              <a href={"tel:"+sucursalData[provincia]["sucursales"][sucursal]["telefono"]}><img src="img/svg/smartphone-1.svg" alt="phone logo" className="img-fluid" /></a>
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
