import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { searchSelectionSelector } from "../../recoil/selectors";

const OtherProfile = (props) => {
	const profile = useRecoilValue(searchSelectionSelector);
	return (
		<>
			<h2>Name: {profile.title}</h2>
			<h2>Description: {profile.description}</h2>
			<h3>Status: {profile.status}</h3>
		</>
	);
};

OtherProfile.propTypes = {};

export default OtherProfile;
