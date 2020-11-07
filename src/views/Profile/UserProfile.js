import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { loggedInUserSelector } from "../../recoil/selectors";
const UserProfile = (props) => {
	const user = useRecoilValue(loggedInUserSelector);
	return (
		<div>
			<h1>UserProfile</h1>
			<h2>username: {user.username}</h2>
		</div>
	);
};

UserProfile.propTypes = {};

export default UserProfile;
