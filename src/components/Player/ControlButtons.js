import React from "react";
import PropTypes from "prop-types";
import { Icon } from "semantic-ui-react";

const ControlButtons = (props) => {
	const { handleClick, play } = props;
	return (
		<div>
			<Icon name="shuffle" link color="blue" onClick={handleClick.shuffle} />
			<Icon name="step backward" link color="blue" onClick={handleClick.last} />
			{play ? (
				<Icon name="pause circle" link color="blue" onClick={handleClick.play} />
			) : (
				<Icon name="play circle" link color="blue" onClick={handleClick.pause} />
			)}
			<Icon name="step forward" link color="blue" onClick={handleClick.next} />
			<Icon name="repeat" link color="blue" onClick={handleClick.repeat} />
		</div>
	);
};

ControlButtons.propTypes = {
	handleClick: PropTypes.object,
};

ControlButtons.defaultProps = {
	handleClick: {
		shuffle: () => console.debug("shuffle"),
		play: () => console.debug("play"),
		pause: () => console.debug("pause"),
		next: () => console.debug("next"),
		last: () => console.debug("last"),
		repeat: () => console.debug("repeat"),
	},
};

export default ControlButtons;
