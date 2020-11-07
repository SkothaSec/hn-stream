import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Browse = (props) => {
	return (
		<>
			<h1>Browse</h1>
			<Outlet />
		</>
	);
};

Browse.propTypes = {};

export default Browse;
