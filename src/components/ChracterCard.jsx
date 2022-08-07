import React from "react";
import { Link } from "react-router-dom";


const ChracterCard = ({ name, thumbnail, description, _id }) => {
	return (
		<Link to={`/character/${_id}`} className="character-cards">
			<div className="character-card-name">{name}</div>
			<div className="character-cards-description">{description}</div>
			<div className="character-card-thumb">
				<img src={thumbnail.path + "." + thumbnail.extension} alt="" />
			</div>
			<div className="like-character-button">
			
			</div>
		</Link>
	);
};

export default ChracterCard;
