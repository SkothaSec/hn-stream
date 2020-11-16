import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import TrackList from "./TrackList";
import { Container } from "semantic-ui-react";

const Library = (props) => {
	return (
		<div>
			<h1>Library</h1>
			<Container>
				<TrackList />
			</Container>
		</div>
	);
};

Library.propTypes = {};

export default Library;
