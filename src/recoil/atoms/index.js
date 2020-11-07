import { atom } from "recoil";
import fooFighters from "../../assets/images/albumCovers/FooFighters-TheColourAndTheShape.jpg";
import blackKeys from "../../assets/images/albumCovers/TheBlackKeys-ElCamino.jpg";
import swamp from "../../assets/images/albumCovers/Swamp-GetGone.jpg";
import silversunPickups from "../../assets/images/albumCovers/SilversunPickups-Carnavas.jpg";

export const loggedInUserState = atom({
	key: "loggedInUser",
	default: { authenticated: false, username: "", password: "" },
});

export const searchSelectionState = atom({
	key: "searchSelection",
	default: { title: "", key: "" },
});

export const signUpUserState = atom({
	key: "signUpUser",
	default: {},
});

export const profileListState = atom({
	key: "profileListState",
	default: [
		{
			title: "Foo Fighters",
			metadata: {
				followers: 500000,
				albums: 9,
				yearsActive: 26,
			},
			description: "Foo Fighters description",
			image: fooFighters,
			id: 1,
			userType: "artist",
		},
		{
			title: "Silversun Pickups",
			metadata: {
				followers: 325000,
				albums: 5,
				yearsActive: 15,
			},
			description: "Silversun Pickups description",
			image: silversunPickups,
			id: 2,
			userType: "artist",
		},
		{
			title: "The Black Keys",
			metadata: {
				followers: 400000,
				albums: 9,
				yearsActive: 19,
			},
			description: "Black Keys description",
			image: blackKeys,
			id: 3,
			userType: "artist",
		},
		{
			title: "Swamp",
			description: "Swamp description",
			metadata: { followers: 10000, albums: 2, yearsActive: 2 },
			image: swamp,
			id: 4,
			userType: "artist",
		},
	],
});
