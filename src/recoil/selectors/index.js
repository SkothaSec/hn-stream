import { selector } from "recoil";
import {
	loggedInUserState,
	searchSelectionState,
	signUpUserState,
	profileListState,
	savedTracksState,
	audioPlayerState,
} from "../atoms";

export const audioPlayerSelector = selector({
	key: "audioPlayerSelector",
	get: ({ get }) => {
		const track = get(audioPlayerState);
		return track;
	},
});
export const loggedInUserSelector = selector({
	key: "loggedInUserSelector",
	get: ({ get }) => {
		const user = get(loggedInUserState);
		return user;
	},
});

export const signUpUserSelector = selector({
	key: "loggedInUserSelector",
	get: ({ get }) => {
		const user = get(signUpUserState);
		return user;
	},
});

export const searchSelectionSelector = selector({
	key: "searchSelectionSelector",
	get: ({ get }) => {
		const selection = get(searchSelectionState);
		return selection;
	},
});

export const profileListSelector = selector({
	key: "profileListSelector",
	get: ({ get }) => {
		const profile = get(profileListState);
		return profile;
	},
});

export const savedTracksSelector = selector({
	key: "savedTracksSelector",
	get: ({ get }) => {
		const tracks = get(savedTracksState);
		return tracks;
	},
});
