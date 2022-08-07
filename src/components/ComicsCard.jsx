import React from "react";

import "../styles/comicsCarousel.css";


const ComicsCard = ({ title, thumbnail, description, _id }) => {
	return (
		<div to={`/comics/${_id}`} className="comics-cards">
			<div className="comics-card-name">{title}</div>

			<div className="comics-card-thumb">
				<img src={thumbnail.path + "." + thumbnail.extension} alt="" />
				<div className="like-comics-button">
				</div>
			</div>

			<div className="comics-cards-description">{description}</div>
		</div>
	);
};

export default ComicsCard;
