import React from "react";

export function HeaderCarousel() {
	return (
		<header>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel"
			>
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner" role="listbox">
					<div
						className="carousel-item active"
						style={{ backgroundImage: "url('img/RR1.jpg')" }}
					>
						<div className="carousel-caption">
							<h1 className="display-4 la-rotonda">La Rotonda</h1>
							<h3 className="lead description-slide">
								Distribuidor Mayorista.
							</h3>
						</div>
					</div>
					<div
						className="carousel-item"
						style={{ backgroundImage: "url('img/local2.jpg')" }}
					></div>
					<div
						className="carousel-item"
						style={{ backgroundImage: "url('img/local.jpg')" }}
					></div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</header>
	);
}
