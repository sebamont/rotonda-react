import React from 'react';

export function Curriculum(){
    return(
        <div className="container  pb-5 shadowed-whitesmoke mt-5 ">
            <div className="row mt-5 ">
                <h2 className="line-sides mb-3"><span className="fancy">¿Querés formar parte de La Rotonda Mayorista?</span></h2>
                <div className="container">
                    <p className="text-center fancy mb-5 d-none d-md-block">Si estás buscando trabajo y te interesa la idea de formar parte del equipo de La Rotonda Mayorista dejanos tu CV y te informamos acerca de todas las búsquedas laborales que puedan interesarte.</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-6 col-xs-12">
                    
                    <form method="POST" action="#" className="needs-validation " noValidate>
                    
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Nombre Completo</label>
                            <input id="name" type="text" className="form-control " placeholder="Nombre Completo" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input id="email" type="email" className="form-control" placeholder="tumail@ejemplo.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input id="phone" type="phone" className="form-control" placeholder="+543874624471" required />
                        </div>        
                        <div className="form-group">
                            <label htmlFor="cv">Dejanos tu CV </label>
                            <input type="file" id="cv" className="form-control-file" placeholder="curriculum" required />
                        </div>
                        <div className="d-flex justify-content-center mt-5">
                            <button type="submit" className="btn btn-success btn-lg btn-color "> Enviar</button>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    )
}