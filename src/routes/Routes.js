import React from "react";
import { Routes as AppRoutes, Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { loggedInUserSelector } from "../recoil/selectors";

import {
	About,
	Authenticate,
	Browse,
	Home,
	Landing,
	Library,
	OtherProfile,
	Profile,
	UserProfile,
} from "../views";

const Routes = () => {
	const user = useRecoilValue(loggedInUserSelector);

	return (
		<AppRoutes>
			<Route
				path="/"
				element={<Landing />}
				redirectTo={!user.authenticated && "home"}
			/>
			<Route path="home" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="browse" element={<Browse />} />
			<Route path="library" element={<Library />} />
			<Route path="profile" element={<Profile />}>
				<Route path=":key" element={<OtherProfile />} />
			</Route>
			<Route path="/user" element={<UserProfile />} />
			<Route path="login" element={<Authenticate />} />
		</AppRoutes>
	);
};

export default Routes;
