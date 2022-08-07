import React from "react";
import ChracterCard from "./ChracterCard";
import "../styles/characterCarousel.css";

const CharacterCarousel = ({ characterArray }) => {
	return (
		<div className="container90vw character-carousel">
			{characterArray.map(({ name, thumbnail, description, comics, _id }) => {
				return (
					<ChracterCard
						key={_id}
						name={name}
						thumbnail={thumbnail}
						description={description}
						comics={comics}
						_id={_id}
					/>
				);
			})}
		</div>
	);
};

export default CharacterCarousel;
