import React from "react";
import PropTypes from "prop-types";
import { Segment, Grid, Divider } from "semantic-ui-react";
import { SignUp, LoginForm } from "./";

const AuthSegment = ({ authenticated }) => {
	return (
		<Segment placeholder>
			<div>{authenticated && "Logged in, switch account?"}</div>
			<Grid columns={3} relaxed="very" stackable>
				<Grid.Column verticalAlign="middle" width={7}>
					<LoginForm />
				</Grid.Column>
				<Grid.Column width={2}>
					<Divider vertical>OR</Divider>
				</Grid.Column>

				<Grid.Column verticalAlign="middle" width={7}>
					<SignUp />
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

AuthSegment.propTypes = {};

export default AuthSegment;
