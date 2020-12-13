import React from 'react';
import {Player, ControlBar} from 'video-react';

export function SobreNosotros(){
    return(
        <div>
            <div className="container mt-5 ">
                <h2 className="line-sides"><span className="fancy">Nuestra Historia</span></h2>
                <div className="row mt-3 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-xs-12 ">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores neque quas eaque veritatis, culpa nulla quo labore temporibus, possimus doloribus doloremque iusto autem impedit voluptatibus eligendi, inventore rem dicta molestias?
                        Ipsum dignissimos omnis consectetur, architecto ipsa obcaecati eum sint error cumque rem exercitationem tenetur accusamus a quae pariatur quod, sed, libero explicabo temporibus suscipit. Consequuntur ratione impedit distinctio. Culpa, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis enim veniam mollitia nostrum quo in animi ea, deserunt ut facere fugiat eaque corporis eveniet suscipit accusamus praesentium, soluta dolorum!</p>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-xs-12 text-center">
                        <Player 
                            
                            src="./img/Supermarket - 20910.mp4"
                            autoPlay
                            muted
                        >
                            <ControlBar autoHide disableDefaultControls={true}>
                                
                            </ControlBar>
                        </Player>
                    </div>           
                </div>
            </div>
            
            <div className="container mt-5 ">
                <h2 className="line-sides"><span className="fancy">Nuestra Misión </span></h2>
                <div className="row mt-3 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-xs-12 text-center d-none d-lg-block ">
                        <img  width="250px"  src="img/logo_central.png" alt="" />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-xs-12">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores neque quas eaque veritatis, culpa nulla quo labore temporibus, possimus doloribus doloremque iusto autem impedit voluptatibus eligendi, inventore rem dicta molestias?
                        Ipsum dignissimos omnis consectetur, architecto ipsa obcaecati eum sint error cumque rem exercitationem tenetur accusamus a quae pariatur quod, sed, libero explicabo temporibus suscipit. Consequuntur ratione impedit distinctio. Culpa, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis enim veniam mollitia nostrum quo in animi ea, deserunt ut facere fugiat eaque corporis eveniet suscipit accusamus praesentium, soluta dolorum!</p>
                    </div>           
                </div>
            </div>

            <div className="container mt-5 ">
                <h2 className="line-sides"><span className="fancy">Nuestra Visión </span></h2>
                <div className="row mt-3 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-xs-12  ">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores neque quas eaque veritatis, culpa nulla quo labore temporibus, possimus doloribus doloremque iusto autem impedit voluptatibus eligendi, inventore rem dicta molestias?
                        Ipsum dignissimos omnis consectetur, architecto ipsa obcaecati eum sint error cumque rem exercitationem tenetur accusamus a quae pariatur quod, sed, libero explicabo temporibus suscipit. Consequuntur ratione impedit distinctio. Culpa, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis enim veniam mollitia nostrum quo in animi ea, deserunt ut facere fugiat eaque corporis eveniet suscipit accusamus praesentium, soluta dolorum!</p>
                    </div>           
                    <div className="col-xl-6 col-lg-6 col-xs-12 text-center d-none d-lg-block">
                        <img  width="250px"  src="img/logo_central.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 ">
                <h2 className="line-sides"><span className="fancy">Nuestros Valores </span></h2>
                <div className="row mt-3 align-items-center">
                    <div className="col-xl-12 col-lg-6 col-xs-12 text-center d-none d-lg-block">
                        <img  width="250px"  src="img/logo_central.png" alt="" />
                    </div>
                    <div className="col-xl-12 col-lg-6 col-xs-12  ">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores neque quas eaque veritatis, culpa nulla quo labore temporibus, possimus doloribus doloremque iusto autem impedit voluptatibus eligendi, inventore rem dicta molestias?
                        Ipsum dignissimos omnis consectetur, architecto ipsa obcaecati eum sint error cumque rem exercitationem tenetur accusamus a quae pariatur quod, sed, libero explicabo temporibus suscipit. Consequuntur ratione impedit distinctio. Culpa, alias.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur debitis enim veniam mollitia nostrum quo in animi ea, deserunt ut facere fugiat eaque corporis eveniet suscipit accusamus praesentium, soluta dolorum!</p>
                    </div>     
                    
                </div>
            </div>
        </div>
    )
}