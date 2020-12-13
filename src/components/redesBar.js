import React from 'react';

export function RedesBar(){
    //Redes sociales (barra arriba del navbar)
    return(
        <div className="redes-container">
            <ul>
            <li><a href="/" className="facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="/" className="instagram"><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    )
}