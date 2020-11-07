import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
const Profile = (props) => {
	return (
		<>
			<h2>Profile</h2>

			<Outlet />
		</>
	);
};

Profile.propTypes = {};

export default Profile;
