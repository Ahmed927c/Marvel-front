import React from "react";
import "../styles/choosePage.css";

const ChoosePage = ({
	currentPage,
	setCurrentPage,
	setLimit,
	limit,
	count,
}) => {
	const handlePageChange = (operator) => {
		if (operator === "-2") setCurrentPage(currentPage - 2);
		else if (operator === "-1") setCurrentPage(currentPage - 1);
		else if (operator === "+1") setCurrentPage(currentPage + 1);
		else if (operator === "+2") setCurrentPage(currentPage + 2);
		window.scrollTo(0, 500);
	};

	const handleLimitChange = (e) => {
		setLimit(e.target.value);
		setCurrentPage(1);
	};

	return (
		<div className="btn-container">
			<div className="page-choose-btn-container">
				Page :
				<button
					onClick={() => handlePageChange("-1")}
					disabled={currentPage > 1 ? false : true}
					className="label-page-btn"
				>
					Précédente
				</button>
				<div className="num-btn-container">
					{limit * currentPage > count && count > limit * 2 ? (
						<button
							onClick={() => handlePageChange("-2")}
							className="num-page-btn"
						>
							{currentPage - 2}
						</button>
					) : null}
					{currentPage > 1 && (
						<button
							onClick={() => handlePageChange("-1")}
							className="num-page-btn"
						>
							{currentPage - 1}
						</button>
					)}
					<button disabled={true} className="num-page-btn current">
						{currentPage}
					</button>
					{limit * currentPage < count && (
						<button
							onClick={() => handlePageChange("+1")}
							className="num-page-btn"
						>
							{currentPage + 1}
						</button>
					)}
					{currentPage <= 1 && count > limit * 2 ? (
						<button
							onClick={() => handlePageChange("+2")}
							className="num-page-btn"
						>
							{currentPage + 2}
						</button>
					) : null}
				</div>
				<button
					onClick={() => handlePageChange("+1")}
					disabled={limit * currentPage < count ? false : true}
					className="label-page-btn"
				>
					Suivante
				</button>
			</div>
			<div className="by-page-btn-container">
				<span>results by page : </span>
				<button
					value={25}
					onClick={handleLimitChange}
					className="by-page-btn"
					disabled={limit === "25" ? true : false}
				>
					25
				</button>
				<button
					value={50}
					onClick={handleLimitChange}
					className="by-page-btn"
					disabled={limit === "50" ? true : false}
				>
					50
				</button>
				<button
					value={100}
					onClick={handleLimitChange}
					className="by-page-btn"
					disabled={limit === "100" ? true : false}
				>
					100
				</button>
			</div>
		</div>
	);
};

export default ChoosePage;
