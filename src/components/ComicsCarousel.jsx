import React from "react";
import ComicsCard from "./ComicsCard";

const ComicsCarousel = ({ comicsArray }) => {
	return (
		<div className="container90vw comics-carousel">
			{comicsArray.map(({ title, thumbnail, description, _id }) => {
				return (
					<ComicsCard
						key={_id}
						title={title}
						thumbnail={thumbnail}
						description={description}
						_id={_id}
					/>
				);
			})}
		</div>
	);
};

export default ComicsCarousel;
