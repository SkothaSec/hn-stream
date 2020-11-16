import React, { useReducer } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

//Global State
import { useRecoilState, useRecoilValue } from "recoil";
import { savedTracksSelector } from "../../recoil/selectors";
import { audioPlayerState } from "../../recoil/atoms";

const trackReducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_SORT":
			if (state.column === action.column) {
				return {
					...state,
					data: state.data.reverse(),
					direction:
						state.direction === "ascending" ? "descending" : "ascending",
				};
			}

			return {
				column: action.column,
				data: _.sortBy(state.data, [action.column]),
				direction: "ascending",
			};
		default:
			throw new Error();
	}
};

const TrackList = () => {
	const savedTracks = useRecoilValue(savedTracksSelector);
	const [playTrack, setPlayTrack] = useRecoilState(audioPlayerState);
	const [state, dispatch] = useReducer(trackReducer, {
		column: null,
		data: savedTracks,
		direction: null,
	});
	const { column, data, direction } = state;
	console.log({ data });
	console.debug({ libraryItems: savedTracks });

	console.debug({ audioPlayerState });

	const handlePlay = (e, data) => {
		console.debug({
			function: "handlePlay",
			event: "click play",
			value: data.value,
		});
		setPlayTrack(data.value);
	};

	return (
		<Table sortable celled inverted>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell />
					<Table.HeaderCell
						sorted={column === "track" ? direction : null}
						onClick={() =>
							dispatch({ type: "CHANGE_SORT", column: "track" })
						}>
						Track
					</Table.HeaderCell>
					<Table.HeaderCell
						sorted={column === "artist" ? direction : null}
						onClick={() =>
							dispatch({ type: "CHANGE_SORT", column: "artist" })
						}>
						Artist
					</Table.HeaderCell>
					<Table.HeaderCell
						sorted={column === "album" ? direction : null}
						onClick={() =>
							dispatch({ type: "CHANGE_SORT", column: "album" })
						}>
						Album
					</Table.HeaderCell>
					<Table.HeaderCell
						sorted={column === "addedOn" ? direction : null}
						onClick={() =>
							dispatch({ type: "CHANGE_SORT", column: "addedOn" })
						}>
						Date Added
					</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{data.map((item) => (
					<Table.Row key={item.added_at}>
						{console.debug({
							track: item.track.name,
							artist: item.track.artists[0].name,
							album: item.track.album.name,
							addedOn: item.added_at,
							albumArt: item.track.album.images[2].url,
							duration: item.track.duration_ms,
							href: item.track.preview_url,
						})}
						<Table.Cell collapsing>
							<Icon
								name="play circle"
								link
								color="blue"
								value={{
									title: item.track.name,
									album: item.track.album.name,
									artist: item.track.artists[0].name,
									albumArt: item.track.album.images[1].url,
									duration: item.track.duration_ms,
									href: item.track.preview_url,
								}}
								onClick={handlePlay}
							/>
						</Table.Cell>
						<Table.Cell>{item.track.name}</Table.Cell>
						<Table.Cell>{item.track.artists[0].name}</Table.Cell>
						<Table.Cell>{item.track.album.name}</Table.Cell>
						<Table.Cell>{item.added_at}</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	);
};

TrackList.propTypes = {};

export default TrackList;
