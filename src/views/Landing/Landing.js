import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { loggedInUserState } from "../../recoil/atoms";

const Landing = (props) => {
	const [userState, setUserState] = useRecoilState(loggedInUserState);
	if (userState.authenticated) {
		return <div>Logged In Landing</div>;
	} else {
		return <div>Logged Out Landing</div>;
	}
};

Landing.propTypes = {};

export default Landing;
