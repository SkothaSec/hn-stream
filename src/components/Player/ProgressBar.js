import React from "react";
import PropTypes from "prop-types";
import { Progress } from "semantic-ui-react";

const ProgressBar = (props) => {
	return <Progress active {...props} />;
};

ProgressBar.propTypes = {};

export default ProgressBar;
