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

			<div className="container mt-3 sucursal-data" id="ofertas">
				<div className="row mx-auto text-center justify-content-center align-items-center">
				<div id="carouselOfertas" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t1.0-9/142934019_1858434077648042_3599488307965653274_o.jpg?_nc_cat=105&ccb=2&_nc_sid=a26aad&_nc_ohc=yB-FjFQ3P6MAX_K5bOB&_nc_ht=scontent.ftuc1-2.fna&oh=277047ba7dc5880d3fbdf89bc272f00a&oe=60378B64" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/143560740_1858434087648041_2602427003375767994_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=_30bojm2-9MAX-y5_aR&_nc_ht=scontent.ftuc1-1.fna&oh=a1e0dd4265fe79aa65541cadc1a8b7b9&oe=603A5BE5" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/142942337_1858434064314710_142063272945599739_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=7r7gWnSfIx4AX9IATgQ&_nc_ht=scontent.ftuc1-1.fna&oh=53dd691255c489c724ea0a467ad686bc&oe=603AB819" alt="Third slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t1.0-9/143213137_1858434067648043_2873326423608378136_o.jpg?_nc_cat=109&ccb=2&_nc_sid=a26aad&_nc_ohc=v0lOgrAfdpsAX9yauDu&_nc_ht=scontent.ftuc1-2.fna&oh=a77c4770eeb4ad33d9550adf9ada09bc&oe=6039ACC0" alt="Fourth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t1.0-9/142830442_1858434070981376_3177365803682408535_o.jpg?_nc_cat=105&ccb=2&_nc_sid=a26aad&_nc_ohc=OWDIwqyK5qoAX_13RvI&_nc_ht=scontent.ftuc1-2.fna&oh=9f3e55b57b16e80e9c9c1d3511363a82&oe=6038EC32" alt="Fifth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/143860891_1858434090981374_6658708635727745219_o.jpg?_nc_cat=107&ccb=2&_nc_sid=a26aad&_nc_ohc=x7RBQNhTOjQAX9mejtd&_nc_ht=scontent.ftuc1-1.fna&oh=f454c3d9f72b515be82443815efd8632&oe=603801F4" alt="Sixth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/142966015_1858434084314708_1380925014867751771_o.jpg?_nc_cat=104&ccb=2&_nc_sid=a26aad&_nc_ohc=-tejAzziMBYAX-0oYJq&_nc_oc=AQlYClAudOJkOi0pGTt-gE-WbzeVSL4Jpk3c7ZNJ5LBlBi8lb2GhkOVVPY4zIH86NNM&_nc_ht=scontent.ftuc1-1.fna&oh=e7d02f32331ae1df8da2f472daa4d093&oe=6038EFCF" alt="Seventh slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/143328362_1858434074314709_8616608656448724164_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=muiN-iSU3cYAX85jLDU&_nc_ht=scontent.ftuc1-1.fna&oh=74acf518ef9e8508d1489470d3e09191&oe=60393F44" alt="Eigth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t1.0-9/143458370_1858434080981375_5952749582776357441_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=GUfyz5flBmoAX_grVha&_nc_ht=scontent.ftuc1-1.fna&oh=5b565d2c173fa66dab736c25117f1bde&oe=603A15EF" alt="Nineth slide" />
						</div>
					</div>
					<a className="carousel-control-prev " href="#carouselOfertas" role="button" data-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="sr-only">Previous</span>
					</a>
					<a className="carousel-control-next " href="#carouselOfertas" role="button" data-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="sr-only">Next</span>
					</a>
					</div>
				</div>
			</div>
		</div>
	);
}
