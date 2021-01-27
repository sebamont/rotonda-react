import React from "react";

export function Ofertas(props) {
	return (
		<div className="container pb-5 shadowed-whitesmoke" id="ofertas">
			<div className="d-none d-md-block row justify-content-center mb-3 pt-3">
				<h2 className="line-sides">
					<span className="fancy">Ofertas</span>
				</h2>
			</div>
			<div className="d-md-none row justify-content-center mb-3 pt-3">
				<h2 className="line-sides">
					<span className="fancy">Ofertas</span>
				</h2>
			</div>
			<div className="row">
				<div className="col-12 align-self-center">
					<h6 className="d-sm-none mb-3 font-italic">Elegí tu provincia:</h6>
					<ul
						className="nav nav-pills justify-content-around"
						role="tablist"
						aria-orientation="horizontal"
					>
						<li className="nav-item dropdown">
							<a
								className={
									props.provincia === "Salta Capital" ||
									props.provincia === "Salta Interior"
										? "nav-link active dropdown-toggle"
										: "nav-link dropdown-toggle"
								}
								data-toggle="dropdown"
								href="/"
							>
								Salta
							</a>
							<div className="dropdown-menu">
								<a
									className={
										props.provincia === "Salta Capital"
											? "dropdown-item active"
											: "dropdown-item"
									}
									href="/"
									data-toggle="pill"
									role="tab"
									title="Salta Capital"
									onClick={props.handleProvincia}
								>
									Capital
								</a>
								<a
									className={
										props.provincia === "Salta Interior"
											? "dropdown-item active"
											: "dropdown-item"
									}
									href="/"
									data-toggle="pill"
									role="tab"
									title="Salta Interior"
									onClick={props.handleProvincia}
								>
									Interior
								</a>
							</div>
						</li>
						<li className="nav-item">
							<a
								className={
									props.provincia === "Jujuy" ? "nav-link active" : "nav-link"
								}
								href="/"
								data-toggle="pill"
								role="tab"
								title="Jujuy"
								onClick={props.handleProvincia}
							>
								Jujuy
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									props.provincia === "Tucumán" ? "nav-link active" : "nav-link"
								}
								href="/"
								data-toggle="pill"
								role="tab"
								title="Tucumán"
								onClick={props.handleProvincia}
							>
								Tucumán
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									props.provincia === "Santiago"
										? "nav-link active"
										: "nav-link"
								}
								href="/"
								data-toggle="pill"
								role="tab"
								title="Santiago"
								onClick={props.handleProvincia}
							>
								Santiago
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									props.provincia === "La Rioja"
										? "nav-link active"
										: "nav-link"
								}
								href="/"
								data-toggle="pill"
								role="tab"
								title="La Rioja"
								onClick={props.handleProvincia}
							>
								La Rioja
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									props.provincia === "Catamarca"
										? "nav-link active"
										: "nav-link"
								}
								href="/"
								data-toggle="pill"
								role="tab"
								title="Catamarca"
								onClick={props.handleProvincia}
							>
								Catamarca
							</a>
						</li>
					</ul>
					<hr />
				</div>
			</div>

			<div className="container mt-3 sucursal-data">
				<div className="row">
					<h3>Aqui va el carousel de ofertas.</h3>
				</div>
			</div>
		</div>
	);
}
