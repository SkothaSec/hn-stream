import fooFighters from "../assets/images/albumCovers/FooFighters-TheColourAndTheShape.jpg";
import blackKeys from "../assets/images/albumCovers/TheBlackKeys-ElCamino.jpg";
import swamp from "../assets/images/albumCovers/Swamp-GetGone.jpg";
import silversunPickups from "../assets/images/albumCovers/SilversunPickups-Carnavas.jpg";
import cgorke from "../assets/images/albumCovers/TheBlackKeys-ElCamino.jpg";

export const searchData = {
	artist: {
		name: "artist",
		results: [
			{
				title: "Foo Fighters",
				followers: 500000,
				albums: 9,
				yearsActive: 26,
				id: 1,
			},
			{
				title: "Silversun Pickups",
				followers: 325000,
				albums: 5,
				yearsActive: 15,
				id: 2,
			},
			{
				title: "The Black Keys",
				followers: 400000,
				albums: 9,
				yearsActive: 19,
				id: 3,
			},
			{ title: "Swamp", followers: 10000, albums: 2, yearsActive: 2, id: 4 },
		],
	},
	user: {
		name: "user",
		results: [{ title: "cgorke", description: "bleep" }],
	},
};

export const searchOptionsCat = {
	users: {
		name: "users",
		results: [
			{
				title: "cgorke",
				description: "Person who made an account",
				price: "active",
				status: "active",
				image: cgorke,
				meta: { followers: 5000000, following: 10000 },
				key: 4,
			},
			{
				name: "user",
				title: "egorke",
				description: "Another person who made an account",
				status: "active",
				price: "active",
				image: cgorke,
				meta: { followers: 5000000, following: 10000 },
				key: 5,
			},
			{
				name: "user",
				title: "jreese",
				description: "Another another Person who made an account",
				status: "active",
				price: "active",
				image: cgorke,
				meta: { followers: 5000000, following: 10000 },
				key: 6,
			},
		],
	},
	artists: {
		name: "artists",
		results: [
			{
				name: "artist",
				title: "Foo Fighters",
				description: "FRESH POTS!",
				status: "active",
				image: fooFighters,
				meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
				key: 1,
			},
			{
				name: "artist",
				title: "Silversun Pickups",
				description: "Blleeeep bloop",
				status: "active",
				image: silversunPickups,
				meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
				key: 2,
			},
			{
				name: "artist",
				title: "Swamp",
				description: "Blues",
				status: "active",
				image: swamp,
				meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
				key: 3,
			},
		],
	},
};

export const searchOptions = [
	{
		name: "artist",
		title: "Foo Fighters",
		description: "FRESH POTS!",
		status: "active",
		image: fooFighters,
		meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
		key: 1,
	},
	{
		name: "artist",
		title: "Silversun Pickups",
		description: "Blleeeep bloop",
		status: "active",
		image: silversunPickups,
		meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
		key: 2,
	},
	{
		name: "artist",
		title: "Swamp",
		description: "Blues",
		status: "active",
		image: swamp,
		meta: { followers: 5000000, following: 10000, albums: 9, formed: 1992 },
		key: 3,
	},
	{
		name: "user",
		title: "cgorke",
		description: "Person who made an account",
		status: "active",
		image: cgorke,
		meta: { followers: 5000000, following: 10000 },
		key: 4,
	},
];
