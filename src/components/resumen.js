import React from "react";
import { Link } from "react-router-dom";

export function Resumen() {
	return (
		<div className="container justify-content-center">
			<h2 className="line-sides d-none d-md-block">
				Un poco&nbsp;<span className="fancy">sobre Nosotros</span>
			</h2>
			<h2 className="line-sides d-md-none">
				<span className="fancy">Un poco sobre Nosotros</span>
			</h2>
			<div className="row mt-3 mt-md-5 align-items-center">
				<div className=" col-12 col-lg-6  ">
					<img
						className="img-fluid"
						src="img/r1.jpg"
						alt=""
						width="500px"
						height="auto"
					/>
				</div>
				<div className=" col-12 col-xl-6 ">
					<div className="row justify-content-center">
						<div className="col-12 ">
							<p>
								Distribuidora Vidt S.R.L, es una empresa familiar salteña, que
								se inició alrededor del año 1990, desarrollando la actividad de
								venta y representación de firmas de Lácteos; con el correr de
								los años fue creciendo y logro convertirse en un mayorista de
								comestibles, logrando a la fecha 26 sucursales{" "}
							</p>
						</div>
						<div className="col-12 d-flex justify-content-center">
							<Link
								className="btn btn-secondary  btn-lg  btn-color"
								to="/nosotros"
								role="button"
							>
								Conocé más sobre La Rotonda Mayorista
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
