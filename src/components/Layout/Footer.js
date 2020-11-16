import React from 'react';
import { Container, Icon, Grid, Progress } from 'semantic-ui-react';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { audioPlayerState } from '../../recoil/atoms';
import { msToHMS } from '../../lib/convertTime';

const Footer = (props) => {
	const [track, setTrack] = useRecoilState(audioPlayerState);
	const [play, setPlay] = useState(false);
	const [timePlayed, setTimePlayed] = useState(0);

	const handlePlay = () => {
		console.log('clicked play on player');
		setPlay(true);
	};
	const handlePause = () => {
		console.log('clicked pause on player');
		setPlay(false);
	};
	const handlePrevious = () => {
		console.log('clicked previous track on player');
	};
	const handleNext = () => {
		console.log('clicked next track on player');
	};
	const handleShuffle = () => {
		console.log('clicked shuffle tracks on player');
	};
	const handleRepeat = () => {
		console.log('clicked repeat track on player');
	};
	return (
		<footer className={props.className}>
			<Container>
				<Grid columns={4} centered>
					<Icon name='shuffle' link color='blue' onClick={handleShuffle} />
					<Icon
						name='step backward'
						link
						color='blue'
						onClick={handlePrevious}
					/>
					{play ? (
						<Icon
							name='pause circle'
							link
							color='blue'
							onClick={handlePause}
						/>
					) : (
						<Icon name='play circle' link color='blue' onClick={handlePlay} />
					)}
					<Icon name='step forward' link color='blue' onClick={handleNext} />
					<Icon name='repeat' link color='blue' onClick={handleNext} />

					<Grid.Column width={3}>{timePlayed}</Grid.Column>
					<Grid.Column width={10}>
						<Progress
							inverted
							percent={timePlayed < 1 ? 0 : timePlayed}
							size='tiny'
						/>
					</Grid.Column>
					<Grid.Column width={3}>{msToHMS(track.duration)}</Grid.Column>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
