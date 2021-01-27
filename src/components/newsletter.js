import React from "react";
import emailjs from "emailjs-com";

export function Newsletter() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"curlydevsgmail",
				"suscripcion",
				e.target,
				"user_ao7NS165y9rp523gQ76so"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}
	return (
		<div className="container shadowed-whitesmoke" id="banner-newsletter">
			<div className="d-none d-md-block row justify-content-center mb-3 pt-3">
				<h2 className="line-sides">
					Suscribite al&nbsp;<span className="fancy">Newsletter</span>
				</h2>
			</div>
			<div className="d-md-none row justify-content-center mb-3 pt-3">
				<h2 className="line-sides">
					<span className="fancy">Newsletter</span>
				</h2>
			</div>
			<div className="row justify-content-center">
				<div className="col-12 mt-3 pb-2 text-justify">
					<h5 className="text-center">
						¿Querés enterarte antes que nadie de nuestras ofertas?
					</h5>
					<p>
						Dejanos tu correo electrónico y provincia en la que residís, y te
						mandaremos por ahí las ofertas de nuestras sucursales, promociones y
						novedades.
					</p>
				</div>
				<div className="col-12 col-lg-9 pb-3 justify-content-center">
					<form
						method="POST"
						action="#"
						className="needs-validation"
						noValidate
						onSubmit={sendEmail}
					>
						<div className="input-group">
							<select id="provincia" name="provincia" className="pl-md-2">
								<option value="Salta">Salta</option>
								<option value="Jujuy">Jujuy</option>
								<option value="Tucumán">Tucuman</option>
								<option value="Santiago">Santiago</option>
								<option value="La Rioja">La Rioja</option>
								<option value="Catamarca">Catamarca</option>
							</select>
							<input
								id="email"
								type="email"
								name="email"
								className="form-control d-none d-md-block"
								placeholder="tumail@ejemplo.com"
							/>
							<input
								id="email"
								name="email"
								type="email"
								className="form-control d-md-none"
								placeholder="E-mail📧"
							/>
							<span className="input-group-btn">
								<button className="btn btn-theme" type="submit">
									Suscribime
								</button>
							</span>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
