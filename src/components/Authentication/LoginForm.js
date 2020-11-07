import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";

import { loggedInUserState } from "../../recoil/atoms";

import { Button, Divider, Form, Grid, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";

const LoginForm = ({}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [valid, setValid] = useState({ username: false, password: false });
	const [login, setLogin] = useRecoilState(loggedInUserState);

	const validate = () => {
		setValid(true);
		console.debug({
			component: "Authenticate",
			action: "validate username and password",
			state: valid,
			note: "default state is valid for now",
		});
	};

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
		console.debug("username onChange: " + e.target.value);
		e.target.value.length >= 4
			? setValid({ ...valid, username: true })
			: setValid({ ...valid, username: false });
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		console.debug("Password onChange: " + e.target.value);
		e.target.value.length >= 7
			? setValid({ ...valid, password: true })
			: setValid({ ...valid, password: false });
	};
	const validCondition = valid.username && valid.password;

	const handleLogin = ({}) => {
		console.debug({
			component: "Authenticate",
			action: "Sign In Selected",
			username,
			password,
		});
		validate();
		valid
			? setLogin({ authenticated: true, username, password })
			: console.debug({ valid });
	};

	return (
		<Form>
			<Form.Input
				icon="user"
				iconPosition="left"
				label="Username"
				placeholder="Username"
				value={username}
				onChange={handleUsernameChange}
			/>
			<Form.Input
				icon="lock"
				iconPosition="left"
				label="Password"
				type="password"
				value={password}
				onChange={handlePasswordChange}
			/>
			<h5>
				{valid.username ? "Valid Username" : "Invalid Username"} <br />
				{valid.password ? "Valid Password" : "Invalid Password"}
			</h5>

			<Button
				content="Login"
				onClick={handleLogin}
				as={Link}
				to="/"
				color={validCondition ? "blue" : "red"}
				disabled={!validCondition}
			/>
		</Form>
	);
};

LoginForm.propTypes = {};

export default LoginForm;
