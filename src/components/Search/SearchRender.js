import React from "react";
import PropTypes from "prop-types";
import { Header, Image, Grid } from "semantic-ui-react";

const SearchRender = ({ image, title, description, name, status, meta }) => {
	return (
		<Grid>
			<Grid.Row>
				<Grid.Column>
					<Header as="h5" color="blue">
						{title}
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Header as="h6" color="green">
						{status}
					</Header>
				</Grid.Column>
				<Grid.Column>
					<Image src={image} />
				</Grid.Column>
			</Grid.Row>
			<Grid.Row>
				<Grid.Column>{description}</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

SearchRender.propTypes = {};

export default SearchRender;
