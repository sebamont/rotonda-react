import React from 'react';
import {Link} from 'react-router-dom';

export function NotFound(){
    return(
        <div className="container  pb-5 shadowed-whitesmoke">
            <div className="row text-center justify-content-center align-items-center">
                <div className="col-6">
                    <img  width="250px"  src="img/logo_central.png" alt="" />
                </div>
                <div className="col-6">
                <h3 id="not-found">Error: 404 Not found</h3>
                <p>La ruta especificada no existe, por favor considera regresar al <Link to="/">Inicio</Link></p>
                </div>
            </div>
        </div>
    )
}