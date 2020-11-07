import React, { useState } from "react";
import { useRecoilState } from "recoil";

import { loggedInUserState } from "../../recoil/atoms";

import { Button, Container, Divider, Form, Grid, Segment } from "semantic-ui-react";
import SignUpModal from "./SignUpModal";
import { AuthSegment } from "../../components/Authentication";

const Authenticate = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [valid, setValid] = useState(true);
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
		console.debug("Username Change: " + e.target.value);
	};
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
		console.debug("Username Change: " + e.target.value);
	};

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

	const handleSelectSignUp = () => {
		console.debug({ component: "Authenticate", action: "Sign Up Selected" });
	};
	return (
		<Container text>
			<AuthSegment />
		</Container>
	);
};

export default Authenticate;
