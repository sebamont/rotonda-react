import React from "react";
import emailjs from "emailjs-com";

export function Contacto() {
	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"curlydevsgmail",
				"contactos",
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
		<div className="container  pb-5 shadowed-whitesmoke">
			<div className="row mt-5 justify-content-center">
				<h2 className="line-sides mb-3 ">
					<span className="text-small fancy">Contactanos</span>
				</h2>

				<p className="text-center mb-5 fancy d-none d-md-block">
					Llená este formulario para enviarnos tus sugerencias o consultas
					acerca de la empresa
				</p>

				<div className="col-xl-6 col-lg-6 col-xs-12">
					<form
						method="POST"
						action="#"
						className="needs-validation "
						noValidate
						onSubmit={sendEmail}
					>
						<div className="form-group">
							<label htmlFor="name" className="form-label">
								Nombre Completo
							</label>
							<input
								id="name"
								name="name"
								type="text"
								className="form-control "
								placeholder="Nombre Completo"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">E-mail</label>
							<input
								id="email"
								name="email"
								type="email"
								className="form-control"
								placeholder="tumail@ejemplo.com"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="phone">Teléfono</label>
							<input
								id="phone"
								name="phone"
								type="phone"
								className="form-control"
								placeholder=""
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="motivo">Seleccione el motivo </label>
							<select
								id="motivo"
								name="motivo"
								className="form-control"
								required
							>
								<option value="consulta">Consulta</option>
								<option value="sugerencia">Sugerencia</option>
								<option value="queja">Queja</option>
								<option value="reclamo">Reclamo</option>
								<option value="otros">Otros</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="comentario">Escriba su comentario </label>
							<textarea
								id="comentario"
								name="comentario"
								className="form-control"
								placeholder="comentario"
								required
							></textarea>
						</div>
						<div className="d-flex justify-content-center mt-5">
							<button
								type="submit"
								className="btn btn-success btn-lg  btn-color "
							>
								{" "}
								Enviar
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
