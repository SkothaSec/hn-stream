import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import { useRecoilState, useRecoilValue } from "recoil";
import { loggedInUserState } from "../../recoil/atoms";
import { loggedInUserSelector } from "../../recoil/selectors";
import { linksArr } from "../../routes/linksArr";
import { SignUp } from "../Authentication";
import { UserAvatar } from "../Buttons";
import { SearchBar } from "../Search";

const defaultLinks = [
	{ title: "Home", name: "home", path: "home" },
	{ title: "About", name: "about", path: "about" },
];

const BaseLinks = (props) => {
	const { linksArr, activeItem, onClick } = props;

	return linksArr.map(({ title, name, path, index }) => {
		console.log({ path, name, title });

		return (
			<Menu.Item
				as={Link}
				to={path}
				key={name}
				name={name}
				active={activeItem === name}
				onClick={onClick}>
				{title}
			</Menu.Item>
		);
	});
};

const NavLinks = (props) => {
	const { linksArr, isAuthenticated, onClick, onAuthClick } = props;
	const [userState, setUserState] = useRecoilState(loggedInUserState);

	const [activeItem, setActiveItem] = useState();
	console.debug({
		component: "NavLinks",
		meta: { userState },
		event: "get recoil value for user",
	});
	const handleClick = (e, { name }) => setActiveItem(name);
	const handleAuthClick = (e, { name }) => {
		setActiveItem(name);
		userState.authenticated
			? setUserState({ authenticated: false })
			: console.log("login clicked");
	};

	return (
		<>
			<BaseLinks
				linksArr={linksArr}
				activeItem={activeItem}
				onClick={handleClick}
			/>

			<Menu.Menu position="right">
				<SearchBar />
				{userState.authenticated && (
					<Menu.Item
						as={Link}
						to="/user"
						style={{ paddingTop: "0px", paddingBottom: "0px" }}>
						<Image
							src="https://react.semantic-ui.com/images/wireframe/image.png"
							avatar
							alt="user avatar"
							size="mini"
						/>
					</Menu.Item>
				)}
				<Menu.Item
					as={Link}
					to={userState.authenticated ? "/" : "login"}
					name={userState.authenticated ? "logout" : "login"}
					active={activeItem === (userState.authenticated ? "logout" : "login")}
					onClick={handleAuthClick}
				/>
			</Menu.Menu>
		</>
	);
};

NavLinks.propTypes = {
	linksArr: PropTypes.array,
};

NavLinks.defaultProps = {
	linksArr: defaultLinks,
};

export default NavLinks;
