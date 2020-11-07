import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState, useSetRecoilState } from "recoil";
import { loggedInUserState, signUpUserState, profileListState } from "../../recoil/atoms";
import { Button, Header, Image, Modal, Menu, Icon, Input } from "semantic-ui-react";
import SignUpForm from "./SignUpForm";
import { uuid } from "../../lib";

const SignUp = (props) => {
	const { isAuthenticated, color } = props;
	const [inputValue, setInputValue] = useState("");
	const setProfileList = useSetRecoilState(signUpUserState);
	const setLoggedInUser = useSetRecoilState(loggedInUserState);
	const setSignUpUser = useRecoilState(signUpUserState);

	const [open, setOpen] = useState(false);
	const [signIn, setSignIn] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [description, setDescription] = useState("headline");

	const [valid, setValid] = useState({
		username: false,
		password: false,
		email: false,
	});

	const validate = () => {
		setValid(true);
		console.debug({
			component: "Authenticate",
			action: "validate username and password",
			state: valid,
			note: "default state is valid for now",
		});
	};
	const id = uuid();
	const defaultImage =
		"https://serc.carleton.edu/download/images/54334/empty_user_icon_256.v2.png";
	const addProfile = () => {
		setProfileList((oldTodoList) => [
			...oldTodoList,
			{
				id,
				title: username,
				metadata: {
					email,
					fullName: `${firstName} ${lastName}`,
					firstName,
					lastName,
				},
				description,
				image: defaultImage,
			},
		]);
		setLoggedInUser({ authenticated: true, username, id });
		setSignUpUser({ id, username, password, firstName, lastName });
		setOpen(false);
	};
	const handleFirstNameChange = ({ target: { value } }) => {
		setFirstName(value);
		console.debug("Email onChange: " + value);
	};
	const handleLastNameChange = ({ target: { value } }) => {
		setLastName(value);
		console.debug("Email onChange: " + value);
	};
	const handleEmailChange = ({ target: { value } }) => {
		setEmail(value);
		console.debug("Email onChange: " + value);
		value.length >= 7
			? setValid({ ...valid, email: true })
			: setValid({ ...valid, email: false });
	};

	const handleUsernameChange = ({ target: { value } }) => {
		setUsername(value);
		console.debug("username onChange: " + value);
		value.length >= 4
			? setValid({ ...valid, username: true })
			: setValid({ ...valid, username: false });
	};
	const handlePasswordChange = ({ target: { value } }) => {
		setPassword(value);
		console.debug("Password onChange: " + value);
		value.length >= 7
			? setValid({ ...valid, password: true })
			: setValid({ ...valid, password: false });
	};

	const handleAccept = (newValue) => {
		console.debug({
			component: "SignUp",
			event: "handle accept signup",
			actions: "Close Modal",
		});
		validate();
		valid ? addProfile() : console.debug({ valid });
	};
	const handleDecline = () => {
		console.debug({
			component: "SignUp",
			event: "handle decline signup",
			actions: "Close Modal",
		});
		setOpen(false);
	};

	console.debug({ SignUp: isAuthenticated });
	return (
		<Modal
			onClose={() => setOpen(false)}
			onOpen={() => setOpen(true)}
			open={open}
			trigger={<Button color={color} content="Sign Up" />}>
			<Header icon="archive" content="Archive Old Messages" />

			<Modal.Content>
				<Input
					icon="user"
					iconPosition="left"
					label="Username"
					placeholder="Username"
					value={username}
					onChange={handleUsernameChange}
				/>
				<Input
					icon="key"
					iconPosition="left"
					label="Password"
					placeholder="Password"
					value={password}
					onChange={handleUsernameChange}
				/>
				<Input
					icon="at"
					iconPosition="left"
					label="Email"
					placeholder="Email"
					value={email}
					onChange={handleEmailChange}
				/>
				<Input
					label="First Name"
					placeholder="First Name"
					value={firstName}
					onChange={handleFirstNameChange}
				/>
				<Input
					label="Last Name"
					placeholder="Last Name"
					value={lastName}
					onChange={handleLastNameChange}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button
					color="red"
					onChange={handleAccept}
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
					onChange={handleAccept}
					onClick={console.debug({
						component: "SignUpForm",
						action: "decline clicked",
						data: "no data",
					})}>
					<Icon name="checkmark" /> Yes
				</Button>
			</Modal.Actions>
		</Modal>
	);
};

SignUp.propTypes = {
	color: PropTypes.string,
	onSignUp: PropTypes.node,
	onDeclineSignUp: PropTypes.node,
};
SignUp.defaultProps = {
	color: "green",
	onSignUp: () => console.debug({ component: "SignUp", action: "Accept" }),
	onDeclineSignUp: () => console.debug({ component: "SignUp", action: "Decline" }),
};

export default SignUp;
