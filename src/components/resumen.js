import React from 'react';
import {Link} from 'react-router-dom';

export function Resumen(){
    return(
        <div className="container justify-content-center">
            <h2 className="line-sides">Un poco&nbsp;<span className="fancy">sobre Nosotros</span></h2>
            <div className="row mt-3 mt-md-5 ">
                <div className=" col-12 col-lg-6  ">
                    <img className="img-fluid" src="img/larotonda.jpg" alt="" width="500px" height="auto" />
                </div>
                <div className=" col-12 col-xl-6 mt-3 ">
                    <div className="row justify-content-center">
                        <div className="col-12 ">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores neque quas eaque veritatis, culpa nulla quo labore temporibus, possimus doloribus doloremque iusto autem impedit voluptatibus eligendi, inventore rem dicta molestias?
                            Ipsum dignissimos omnis consectetur, architecto ipsa obcaecati eum sint error cumque rem exercitationem tenetur accusamus a quae pariatur quod, sed, libero explicabo temporibus suscipit. Consequuntur ratione impedit distinctio. Culpa, alias.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis enim veniam mollitia nostrum quo in animi ea, deserunt ut facere fugiat eaque corporis eveniet suscipit accusamus praesentium, soluta dolorum!</p>
                        </div>
                        <div className="col-12 mt-xs-3 d-flex justify-content-center">
                            <Link className="btn btn-secondary  btn-lg  btn-color" to="/nosotros" role="button">Conocé más sobre La Rotonda Mayorista</Link>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}