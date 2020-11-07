import React from "react";
import PropTypes from "prop-types";

import { Image, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const UserAvatar = (username, showUsername, src, to) => {
	console.log({ to });
	return (
		<Image
			src={src}
			avatar
			as={Link}
			to={to}
			alt="user avatar"
			size="small"
			src={src}
		/>
	);
};

export default UserAvatar;
