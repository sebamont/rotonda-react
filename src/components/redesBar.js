import React from 'react';

export function RedesBar(){
    //Redes sociales (barra arriba del navbar)
    return(
        <div className="redes-container">
            <ul>
            <li><a href="https://www.facebook.com/rotondamayorista/" className="facebook" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://www.instagram.com/rotondamayorista/" target="_blank" className="instagram" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    )
}