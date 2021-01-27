import React from "react";
import { Player, ControlBar } from "video-react";

export function SobreNosotros() {
	return (
		<div>
			<div className="container mt-5 ">
				<h2 className="line-sides">
					<span className="fancy">Nuestra Historia</span>
				</h2>
				<div className="row mt-3 align-items-center">
					<div className="col-xl-12 col-lg-12 col-xs-12 text-center mt-2 d-none d-none d-md-block">
						<img src="./img/RR1.jpg" className="img-fluid " />
					</div>
					<div className="col-xl-12 col-lg-12 col-xs-12 mt-3">
						<p className="text-center ">
							<strong>Distribuidora Vidt S.R.L</strong>, es una{" "}
							<strong> empresa familiar salteña </strong>, que se inició
							alrededor del año 1990, desarrollando la actividad de venta y
							representación de firmas de Lácteos; con el correr de los años fue
							creciendo y logro convertirse en un mayorista de comestibles,
							logrando a la fecha <strong> 26 sucursales </strong>.{" "}
						</p>{" "}
						<p className="text-center ">
							{" "}
							12 en la Provincia de Salta, seis son en la Ciudad de Salta, y las
							otras seis divididas en Cerrillos, Metan, Oran, Joaquín V.
							González, Tartagal, y Cafayate; <br /> 3 en la Provincia de
							Santiago del Estero, la primera de ellas en su capital y las otras
							dos en La Banda y Frías;
							<br />1 en la Provincia de La Rioja; <br /> 4 en la Provincia de
							Tucumán, dos en San Miguel de Tucumán y las otras dos en La banda
							del Río Salí y Concepción; <br /> 4 en la Provincia de Jujuy,
							divididas en San Salvador de Jujuy, Perico, San Pedro y
							Libertador; <br /> 2 en Catamarca, divididas en San Fernando de
							Catamarca y Belén. <br />{" "}
						</p>
						<p className="text-center ">
							Cuenta además con dos <strong>Centros de distribución </strong>{" "}
							estratégicamente ubicados desde donde se abastecen a todas las
							sucursales, en la Provincia de Tucumán, Localidad de Alderete, y
							en el Parque Industrial de la Ciudad de Salta. Ambos con más de
							10.000 mts de superficie. <br />{" "}
						</p>
						<p className="text-center ">
							La sede central de esta empresa está ubicada en el Parque
							Industrial de la Ciudad de Salta desde donde se gestionan la
							totalidad de las operaciones técnicas y logísticas. La misma se
							apoya en más de 300 proveedores muy importantes en el rubro. Lo
							que la convierte en una empresa Líder y ejemplo en todo el NOA.{" "}
							<br />{" "}
						</p>
						<p className="text-center ">
							Esta empresa es fuente de trabajo de más de 200 familias que
							dependen de ella y a raíz de su crecimiento constantemente se
							incrementan las fuentes de trabajo en todo el NOA.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
