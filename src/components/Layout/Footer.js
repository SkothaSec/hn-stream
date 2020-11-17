import React from "react";
import { Container, Icon, Grid, Progress } from "semantic-ui-react";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { audioPlayerState } from "../../recoil/atoms";
import { formatTime } from "../../lib";
import { AudioPlayer, ControlButtons, PlayBar } from "../Player";
import { AudioPlayerProvider } from "react-use-audio-player";
import Waveform from "../Player/WaveForm";

const Footer = (props) => {
	const [track, setTrack] = useRecoilState(audioPlayerState);
	const [play, setPlay] = useState(false);
	const [timePlayed, setTimePlayed] = useState(0);
	console.log({ track });
	const audioControls = {
		play: () => {
			console.log("clicked play on player");
			setPlay(false);
		},
		pause: () => {
			console.log("clicked pause on player");
			setPlay(true);
		},
		last: () => {
			console.log("clicked previous track on player");
		},
		next: () => {
			console.log("clicked next track on player");
		},
		shuffle: () => {
			console.log("clicked shuffle tracks on player");
		},
		repeat: () => {
			console.log("clicked repeat track on player");
		},
	};

	return (
		<footer className={props.className}>
			<Container>
				<ControlButtons handleClick={audioControls} />
				<Waveform url={track.href} />
			</Container>
		</footer>
	);
};

export default Footer;
