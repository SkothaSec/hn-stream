import { selector } from "recoil";
import { loggedInUserState, searchSelectionState, signUpUserState } from "../atoms";

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
