import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from "../components/Nav";

import Search from "../components/Search";
import ComicsCarousel from "../components/ComicsCarousel";
import ChoosePage from "../components/ChoosePage";

const Comics = ({
	currentPage,
	setCurrentPage,
	limit,
	setLimit,
	count,
	setCount,
}) => {
	const [comicsArray, setComicsArray] = useState([]);
	const [comicsSearch, setComicsSearch] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const response = await axios.get(
					`https://marvel-back-ahmed.herokuapp.com/comics/?title=${comicsSearch}&limit=${limit}&page=${currentPage}`
				);
				setCount(response.data.count);
				setComicsArray(response.data.results);
				setIsLoading(false);
			} catch (error) {
				console.log({ error: error.message });
			}
		};
		fetchData();
	}, [comicsSearch, currentPage, limit]);

	return (
		<div>

			<Nav setCurrentPage={setCurrentPage} />
			<Search
				comicsSearch={comicsSearch}
				setComicsSearch={setComicsSearch}
				setCurrentPage={setCurrentPage}
			/>
			<ChoosePage
				currentPage={currentPage}
				setCurrentPage={setCurrentPage}
				limit={limit}
				setLimit={setLimit}
				count={count}
			/>
			<ComicsCarousel comicsArray={comicsArray} />
		</div>
	);
};

export default Comics;
