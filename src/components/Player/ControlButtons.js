import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

const ControlButtons = (props) => {
	const { play } = props;

	return (
		<div>
			<Icon name="shuffle" link color="blue" {...props} />
			<Icon name="step backward" link color="blue" {...props} />
			{play ? (
				<Icon name="pause circle" link color="blue" {...props} />
			) : (
				<Icon name="play circle" link color="blue" {...props} />
			)}
			<Icon name="step forward" link color="blue" {...props} />
			<Icon name="repeat" link color="blue" {...props} />
		</div>
	);
};

ControlButtons.propTypes = {
	play: PropTypes.bool,
};

ControlButtons.defaultProps = {
	play: false,
};

export default ControlButtons;
