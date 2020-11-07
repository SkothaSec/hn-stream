import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Button, Header, Image, Modal, Menu, Icon } from "semantic-ui-react";

const SignUpModal = (props) => {
	const { activeItem, onClick, isAuthenticated } = props;

	const [open, setOpen] = useState(false);

	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button content="Sign up" icon="signup" size="big" />}>
			{" "}
			<Header icon="archive" content="Archive Old Messages" />
			<Modal.Content>
				<p>
					Your inbox is getting full, would you like us to enable automatic
					archiving of old messages?
				</p>
			</Modal.Content>
			<Modal.Actions>
				<Button color="red">
					<Icon name="remove" /> No
				</Button>
				<Button color="green">
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

SignUpModal.propTypes = {};

export default SignUpModal;
