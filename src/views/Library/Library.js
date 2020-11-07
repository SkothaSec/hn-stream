import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";

const Library = (props) => {
	return (
		<>
			<h1>Library</h1>
			<Outlet />
		</>
	);
};

Library.propTypes = {};

export default Library;
