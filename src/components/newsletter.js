import React from 'react';

export function Newsletter(){
    return(
        <div class="container shadowed-whitesmoke" id="banner-newsletter">
            <div class="d-none d-md-block row justify-content-center mb-3 pt-3">
                <h2 class="line-sides">Suscribite al &nbsp;<span class="fancy">Newsletter</span></h2>
            </div>
            <div class="d-md-none row justify-content-center mb-3 pt-3">
                <h2 class="line-sides"><span class="fancy">Newsletter</span></h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-12 mt-3 pb-2 text-justify">
                    <h5 class="text-center">¿Querés enterarte antes que nadie de nuestras ofertas?</h5> 
                    <p>Dejanos tu correo electrónico y provincia en la que residís, y te mandaremos por ahí las ofertas de nuestras sucursales, promociones y novedades.</p>
                </div>
                <div class="col-12 col-lg-9 pb-3 justify-content-center">
                    <div class="input-group">
                    <select name="provincia" id="select-provincia" class="pl-md-2">
                        <option value="Salta">Salta</option>
                        <option value="Salta">Jujuy</option>
                        <option value="Salta">Tucuman</option>
                        <option value="Salta">Santiago</option>
                        <option value="Salta">La Rioja</option>
                        <option value="Salta">Catamarca</option>
                    </select>
                    <input type="email" class="form-control d-none d-md-block" placeholder="tumail@ejemplo.com" />
                    <input type="email" class="form-control d-md-none" placeholder="E-mail📧" />
                    <span class="input-group-btn">
                        <button class="btn btn-theme" type="submit">Suscribime</button>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}