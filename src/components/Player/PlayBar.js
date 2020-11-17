import React, { useCallback } from "react";
import { useAudioPosition } from "react-use-audio-player";
import { ProgressBar } from "./";

const PlayBar = () => {
	const { percentComplete, duration, seek } = useAudioPosition({
		highRefreshRate: true,
	});

	const goToPosition = useCallback(
		(percentage) => {
			seek(duration * percentage);
		},
		[duration, seek],
	);

	return (
		<ProgressBar
			percentComplete={percentComplete}
			onBarPositionClick={goToPosition}
		/>
	);
};

export default PlayBar;
