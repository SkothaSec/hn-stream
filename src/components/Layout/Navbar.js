import React, { useState, useEffect, setTimeout } from "react";
import PropTypes from "prop-types";

import { Menu } from "semantic-ui-react";
import { logo as defaultLogo } from "../../assets/images/logo.svg";
import { linksArr } from "../../routes/linksArr";
import NavLinks from "./NavLinks";

const Navbar = (props) => {
	const { brandLogo, brandName } = props;
	const [activeItem, setActiveItem] = useState();
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleClick = (e, { name }) => setActiveItem(name);
	const handleAuthClick = (e, { name }) => {
		const authState = !authenticated;
		setActiveItem(name);
		setAuthenticated(authState);
	};
	useEffect(() => {}, []);

	return (
		<Menu>
			<Menu.Item>
				<img src={defaultLogo} />
				{brandName}
			</Menu.Item>
			<NavLinks linksArr={linksArr} />
		</Menu>
	);
};

Navbar.propTypes = {
	brandLogo: PropTypes.node,
	brandName: PropTypes.node,
};

Navbar.defaultProps = {
	brandLogo: defaultLogo,
	brandName: "Haptic",
};

export default Navbar;
