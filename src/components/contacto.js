import React from 'react';

export function Contacto() {
    return(
        <div className="container  pb-5 shadowed-whitesmoke">

            <div className="row mt-5 justify-content-center">
                <h2 className="line-sides mb-3 "><span className="text-small fancy">Contactanos</span></h2>
            

                <p className="text-center mb-5 fancy d-none d-md-block">Llená este formulario para enviarnos tus sugerencias o consultas acerca de la empresa</p>      
                
                <div className="col-xl-6 col-lg-6 col-xs-12">
                    
                    <form method="POST" action="#" className="needs-validation " novalitade>
                    
                    <div className="form-group">
                        <label for="name" className="form-label">Nombre Completo</label>
                        <input id="name" type="text" className="form-control " placeholder="Nombre Completo" required />
                    </div>
                    
                    <div className="form-group">
                        <label for="email">E-mail</label>
                        <input id="email" type="email" className="form-control" placeholder="tumail@ejemplo.com" required />
                    </div>

                    <div className="form-group">
                        <label for="phone">Teléfono</label>
                        <input id="phone" type="phone" className="form-control" placeholder="+543874624471" required />
                    </div>

                    <div className="form-group">
                        <label for="motivo">Seleccione el motivo </label>
                        <select id="motivo" className="form-control" required>
                            <option value="">Consulta</option>
                            <option value="">Sugerencia</option>
                            <option value="">Queja</option>
                            <option value="">Reclamo</option>
                            <option value="">Otros</option>              
                        </select>
                    </div>

                    <div className="form-group">
                        <label for="comentario">Escriba su comentario </label>
                        <textarea id="comentario" className="form-control" placeholder="comentario" required></textarea>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <button type="submit" className="btn btn-success btn-lg  btn-color "> Enviar</button>
                    </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}