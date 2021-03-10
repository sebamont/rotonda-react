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
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/157304576_1889804601177656_2365338785358834700_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=37YHETuRCUEAX-hzE3F&_nc_ht=scontent.faep8-2.fna&oh=46f58772d6d29fa9f787c0c767ba7b75&oe=606D42BA" alt="First slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/156954688_1889804611177655_6429659535239556266_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=a26aad&_nc_ohc=lUgkJLEFTk0AX9SeriJ&_nc_ht=scontent.faep8-1.fna&oh=c53217b85c638fad37540d75d4bd78ca&oe=606EF497" alt="Second slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/156870946_1889804624510987_3035902456258925079_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=q2zdy5hDHYwAX9ydq4y&_nc_ht=scontent.faep8-1.fna&oh=fcd23ed824929a2bc1538ece1c7208e9&oe=606F5B36" alt="Third slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/157139787_1889804604510989_4948363468146902987_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=a26aad&_nc_ohc=N1gz7xqqXA8AX_AJ0VG&_nc_ht=scontent.faep8-1.fna&oh=4b5bf70a5a51cf878d88e0293c0a008d&oe=606BBF0C" alt="Fourth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/157321721_1889804607844322_6138100110244421192_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=a26aad&_nc_ohc=N1XjND-PBYAAX_QIuCt&_nc_ht=scontent.faep8-2.fna&oh=7ea6286be2d34acf34f7100aab672ee3&oe=606E7D3E" alt="Fifth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/157341348_1889804597844323_1436796911241468697_o.jpg?_nc_cat=108&ccb=1-3&_nc_sid=a26aad&_nc_ohc=wFMtQq9tKGUAX9Is_bH&_nc_ht=scontent.faep8-2.fna&oh=f2ec6cf17f3bac2a4029b6039e73b71f&oe=606CFEA8" alt="Sixth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/156409091_1889804621177654_7499656488599457639_o.jpg?_nc_cat=111&ccb=1-3&_nc_sid=a26aad&_nc_ohc=rwwXQo20Sr4AX8ruNc0&_nc_oc=AQl6w-6UMt_KdqkkA06IvHzHtvGcXf4-Yh_-FYz0RdpnngYk4bD8V7DArwtxxD0HY4c&_nc_ht=scontent.faep8-1.fna&oh=c4a107e4085da51e859394ef32720334&oe=606F6FC6" alt="Seventh slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-1.fna.fbcdn.net/v/t1.0-9/157365686_1889804617844321_2048325293760108905_o.jpg?_nc_cat=103&ccb=1-3&_nc_sid=a26aad&_nc_ohc=M-8qDXIo9dsAX-ZfL06&_nc_ht=scontent.faep8-1.fna&oh=72e23aa2902fb7d40088cb4973e3f98c&oe=606D0890" alt="Eigth slide" />
						</div>
						<div className="carousel-item">
							<img className="img-fluid h-100 ofertas-img" src="https://scontent.faep8-2.fna.fbcdn.net/v/t1.0-9/157307338_1889804614510988_3164316770257678004_o.jpg?_nc_cat=100&ccb=1-3&_nc_sid=a26aad&_nc_ohc=ttGyAJEOMfEAX9OA3bS&_nc_ht=scontent.faep8-2.fna&oh=4d097addf70231b2bb74739e6bdedae5&oe=606C71F1" alt="Nineth slide" />
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
