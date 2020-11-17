import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { searchSelectionSelector } from "../../recoil/selectors";
import AudioPlayer from "../../components/Player/AudioPlayer";

const streamUrl =
	"https://p.scdn.co/mp3-preview/7ea8d3976e830804d5fa90a9b4cd86f95e5bcd81?cid=774b29d4f13844c495f206cafdad9c86";

const trackTitle = "Tell Me Lies";
const OtherProfile = (props) => {
	const profile = useRecoilValue(searchSelectionSelector);
	return (
		<>
			<h2>Name: {profile.title}</h2>
			<h2>Description: {profile.description}</h2>
			<h3>Status: {profile.status}</h3>
		</>
	);
};

OtherProfile.propTypes = {};

export default OtherProfile;
