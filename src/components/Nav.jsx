import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/nav.css";

const Nav = ({ setCurrentPage }) => {
	const { pathname } = useLocation();
	return (
		<div className="nav-container">
			<nav>
				<ul>
					<Link to={"/"} onClick={() => setCurrentPage(1)}>
						<li className={pathname === "/" ? "active" : undefined}>
							<FontAwesomeIcon icon="mask" className="header-icon" />
							<span>CHARACTERS</span>
						</li>
					</Link>
					<Link to={"/comics"} onClick={() => setCurrentPage(1)}>
						<li className={pathname === "/comics" ? "active" : undefined}>
							<FontAwesomeIcon icon="book-open" className="header-icon" />
							<span>COMICS</span>
						</li>
					</Link>
					<Link to={"/favourites"}>
						<li className={pathname === "/favorites" ? "active" : undefined}>
							<FontAwesomeIcon icon="heart" className="header-icon" />
							<span>FAVORITES</span>
						</li>
					</Link>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
