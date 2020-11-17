import React from "react";
import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import AudioPlayer from "../../components/Player/AudioPlayer";

const streamUrl =
	"https://p.scdn.co/mp3-preview/7ea8d3976e830804d5fa90a9b4cd86f95e5bcd81?cid=774b29d4f13844c495f206cafdad9c86";

const trackTitle = "Tell Me Lies";
const Profile = (props) => {
	return (
		<>
			<h2>Profile</h2>
			<AudioPlayer
				streamUrl={streamUrl}
				trackTitle={trackTitle}
				preloadType="metadata"
			/>
			<Outlet />
		</>
	);
};

Profile.propTypes = {};

export default Profile;
