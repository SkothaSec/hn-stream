import React, { createRef, useState } from "react";
import PropTypes from "prop-types";
import { audioPlayerState } from "../../recoil/atoms";
import { useRecoilState } from "recoil";
import {
	Card,
	Button,
	Grid,
	Image,
	Segment,
	Sticky,
	Icon,
	Container,
	Progress,
} from "semantic-ui-react";
import { msToHMS } from "../../lib";

const Player = (props) => {
	const [track, setTrack] = useRecoilState(audioPlayerState);
	const [play, setPlay] = useState(false);
	const [timePlayed, setTimePlayed] = useState(0);

	const handlePlay = () => {
		console.log("clicked play on player");
		setPlay(true);
	};
	const handlePause = () => {
		console.log("clicked pause on player");
		setPlay(false);
	};
	const handlePrevious = () => {
		console.log("clicked previous track on player");
	};
	const handleNext = () => {
		console.log("clicked next track on player");
	};
	const handleShuffle = () => {
		console.log("clicked shuffle tracks on player");
	};
	const handleRepeat = () => {
		console.log("clicked repeat track on player");
	};

	return (
		<Segment attached="bottom" style={{ marginTop: "50px" }}>
			<Card.Group>
				<Card>
					<Card.Content>
						<Image floated="left" size="mini" src={track.albumArt} />
						<Card.Header content={track.title} />
						<Card.Meta content={track.artist} />
						<Card.Description>
							<Container textAlign="center">
								<Icon
									name="shuffle"
									link
									color="blue"
									onClick={handleShuffle}
								/>
								<Icon
									name="step backward"
									link
									color="blue"
									onClick={handlePrevious}
								/>
								{play ? (
									<Icon
										name="pause circle"
										link
										color="blue"
										onClick={handlePause}
									/>
								) : (
									<Icon
										name="play circle"
										link
										color="blue"
										onClick={handlePlay}
									/>
								)}
								<Icon
									name="step forward"
									link
									color="blue"
									onClick={handleNext}
								/>
								<Icon
									name="repeat"
									link
									color="blue"
									onClick={handleNext}
								/>
							</Container>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<Grid columns={3} centered>
							<Grid.Column width={3}>{timePlayed}</Grid.Column>
							<Grid.Column width={10}>
								<Progress
									inverted
									percent={timePlayed < 1 ? 0 : timePlayed}
									size="tiny"
								/>
							</Grid.Column>
							<Grid.Column width={3}>{msToHMS(track.duration)}</Grid.Column>
						</Grid>
					</Card.Content>
				</Card>
			</Card.Group>
			<Grid verticalAlign="middle" container columns={3} centered>
				<Grid.Column>
					<Image src={track.albumArt} size="tiny" />
				</Grid.Column>
				<Grid.Column>
					<Grid.Row>
						<Grid.Column>{track.title}</Grid.Column>
						<Grid.Column>{track.artist}</Grid.Column>
					</Grid.Row>
					<Grid.Row>duration: {msToHMS(track.duration)}</Grid.Row>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

Player.propTypes = {};

export default Player;
