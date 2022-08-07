import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/search.css";

const Search = ({
	characterSearch,
	setCharacterSearch,
	comicsSearch,
	setComicsSearch,
	setCurrentPage,
}) => {
	const { pathname } = useLocation();
	const handleChange = (e) => {
		if (pathname === "/") setCharacterSearch(e.target.value);
		else if (pathname === "/comics") setComicsSearch(e.target.value);
		setCurrentPage(1);
	};

	return (
		<div className="search-container">
			<div className="search-input">
				<FontAwesomeIcon icon="fa-search" className="search-icon" />
				<input
					type="text"
					value={
						pathname === "/"
							? characterSearch
							: pathname === "/comics"
							? comicsSearch
							: undefined
					}
					onChange={handleChange}
				/>
			</div>
		</div>
	);
};

export default Search;
