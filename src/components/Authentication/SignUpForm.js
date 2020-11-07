import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const SignUpForm = (props) => {
	const {
		activeItem,
		onChange,
		isAuthenticated,
		onSignUp,
		onDeclineSignUp,
		color,
	} = props;

	const handleChange = (event) => {
		onChange(event.target.value);
		console.debug({
			component: "SignUpForm",
			action: "handleChange",
			event: event.target.value,
		});
	};
	return (
		<>
			<Modal.Content>
				<p>
					Your inbox is getting full, would you like us to enable automatic
					archiving of old messages?
				</p>
			</Modal.Content>
			<Modal.Actions>
				<Button
					color="red"
					value={false}
					onChange={handleChange}
					onClick={console.debug({
						component: "SignUpForm",
						action: "decline clicked",
						data: "no data",
					})}>
					<Icon name="remove" /> No
				</Button>
				<Button
					color="green"
					value={true}
					onChange={handleChange}
					onClick={console.debug({
						component: "SignUpForm",
						action: "decline clicked",
						data: "no data",
					})}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</>
	);
};

SignUpForm.propTypes = {};

export default SignUpForm;
