import { atom } from "recoil";
import { uuid } from "../../lib";

import fooFighters from "../../assets/images/albumCovers/FooFighters-TheColourAndTheShape.jpg";
import blackKeys from "../../assets/images/albumCovers/TheBlackKeys-ElCamino.jpg";
import swamp from "../../assets/images/albumCovers/Swamp-GetGone.jpg";
import silversunPickups from "../../assets/images/albumCovers/SilversunPickups-Carnavas.jpg";

export const loggedInUserState = atom({
	key: "loggedInUser",
	default: { authenticated: false, username: "", password: "" },
});

export const audioPlayerState = atom({
	key: "audioPlayerState",
	default: {
		play: false,
		title: "",
		artist: "",
		album: "",
		albumArt: "https://react.semantic-ui.com/images/wireframe/image.png",
		duration: 0,
		href: "",
	},
});

export const searchSelectionState = atom({
	key: "searchSelection",
	default: { title: "", key: "" },
});

export const signUpUserState = atom({
	key: "signUpUser",
	default: {},
});

export const profilesState = atom({
	key: "profilesState",
	default: [
		{
			title: "Foo Fighters",
			metadata: {
				profileType: "artist",
				followers: 500000,
				albums: 9,
				yearsActive: 26,
			},
			description: "Foo Fighters description",
			image: fooFighters,
			id: uuid(),
		},
		{
			title: "Silversun Pickups",
			metadata: {
				profileType: "artist",
				followers: 325000,
				albums: 5,
				yearsActive: 15,
			},
			description: "Silversun Pickups description",
			image: silversunPickups,
			id: uuid(),
		},
		{
			title: "The Black Keys",
			metadata: {
				followers: 400000,
				albums: 9,
				yearsActive: 19,
				profileType: "artist",
			},
			description: "Black Keys description",
			image: blackKeys,
			id: uuid(),
		},
		{
			title: "Swamp",
			description: "Swamp description",
			metadata: {
				profileType: "artist",
				followers: 10000,
				albums: 2,
				yearsActive: 2,
			},
			image: swamp,
			id: uuid(),
		},
	],
});

export const profileListState = atom({
	key: "profileListState",
	default: [
		{
			title: "Foo Fighters",
			metadata: {
				profileType: "artist",
				followers: 500000,
				albums: 9,
				yearsActive: 26,
				profileType: "artist",
			},
			description: "Foo Fighters description",
			image: fooFighters,
			id: uuid(),
		},
		{
			title: "Silversun Pickups",
			metadata: {
				profileType: "artist",
				followers: 325000,
				albums: 5,
				yearsActive: 15,
			},
			description: "Silversun Pickups description",
			image: silversunPickups,
			id: uuid(),
		},
		{
			title: "The Black Keys",
			metadata: {
				profileType: "artist",
				followers: 400000,
				albums: 9,
				yearsActive: 19,
			},
			description: "Black Keys description",
			image: blackKeys,
			id: uuid(),
		},
		{
			title: "Swamp",

			description: "Swamp description",
			metadata: {
				profileType: "artist",
				followers: 10000,
				albums: 2,
				yearsActive: 2,
			},
			image: swamp,
			id: uuid(),
		},
	],
});

export const savedTracksState = atom({
	key: "savedTracksState",
	default: [
		{
			added_at: "2020-11-09T22:34:05Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
							},
							href:
								"https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
							id: "7mnBLXK823vNxN3UWB7Gfz",
							name: "The Black Keys",
							type: "artist",
							uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/0aA9rYw8PEv9G7tVIJ9dKg",
					},
					href: "https://api.spotify.com/v1/albums/0aA9rYw8PEv9G7tVIJ9dKg",
					id: "0aA9rYw8PEv9G7tVIJ9dKg",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b27326ff57bc134aa594b08bf721",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e0226ff57bc134aa594b08bf721",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d0000485126ff57bc134aa594b08bf721",
							width: 64,
						},
					],
					name: '"Let\'s Rock"',
					release_date: "2019-06-28",
					release_date_precision: "day",
					total_tracks: 12,
					type: "album",
					uri: "spotify:album:0aA9rYw8PEv9G7tVIJ9dKg",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
						},
						href: "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
						id: "7mnBLXK823vNxN3UWB7Gfz",
						name: "The Black Keys",
						type: "artist",
						uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
					},
				],
				disc_number: 1,
				duration_ms: 219890,
				explicit: false,
				external_ids: {
					isrc: "USNO11900067",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/2scIG4pnqvCStKHTZiWB0V",
				},
				href: "https://api.spotify.com/v1/tracks/2scIG4pnqvCStKHTZiWB0V",
				id: "2scIG4pnqvCStKHTZiWB0V",
				is_local: false,
				is_playable: true,
				name: "Tell Me Lies",
				popularity: 50,
				preview_url:
					"https://p.scdn.co/mp3-preview/7ea8d3976e830804d5fa90a9b4cd86f95e5bcd81?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 5,
				type: "track",
				uri: "spotify:track:2scIG4pnqvCStKHTZiWB0V",
			},
		},
		{
			added_at: "2020-11-09T22:33:52Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
							},
							href:
								"https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
							id: "7mnBLXK823vNxN3UWB7Gfz",
							name: "The Black Keys",
							type: "artist",
							uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5DLhV9yOvZ7IxVmljMXtNm",
					},
					href: "https://api.spotify.com/v1/albums/5DLhV9yOvZ7IxVmljMXtNm",
					id: "5DLhV9yOvZ7IxVmljMXtNm",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2736a21b97de47168df4f0c1993",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e026a21b97de47168df4f0c1993",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048516a21b97de47168df4f0c1993",
							width: 64,
						},
					],
					name: "El Camino",
					release_date: "2011-12-06",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:5DLhV9yOvZ7IxVmljMXtNm",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
						},
						href: "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
						id: "7mnBLXK823vNxN3UWB7Gfz",
						name: "The Black Keys",
						type: "artist",
						uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
					},
				],
				disc_number: 1,
				duration_ms: 193653,
				explicit: false,
				external_ids: {
					isrc: "USNO11100273",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/5G1sTBGbZT5o4PNRc75RKI",
				},
				href: "https://api.spotify.com/v1/tracks/5G1sTBGbZT5o4PNRc75RKI",
				id: "5G1sTBGbZT5o4PNRc75RKI",
				is_local: false,
				is_playable: true,
				name: "Lonely Boy",
				popularity: 72,
				preview_url:
					"https://p.scdn.co/mp3-preview/6b462b2d89ed30b669470c39c65b0f04d6ac740b?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 1,
				type: "track",
				uri: "spotify:track:5G1sTBGbZT5o4PNRc75RKI",
			},
		},
		{
			added_at: "2020-11-09T22:33:49Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
							},
							href:
								"https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
							id: "7mnBLXK823vNxN3UWB7Gfz",
							name: "The Black Keys",
							type: "artist",
							uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/5DLhV9yOvZ7IxVmljMXtNm",
					},
					href: "https://api.spotify.com/v1/albums/5DLhV9yOvZ7IxVmljMXtNm",
					id: "5DLhV9yOvZ7IxVmljMXtNm",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2736a21b97de47168df4f0c1993",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e026a21b97de47168df4f0c1993",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048516a21b97de47168df4f0c1993",
							width: 64,
						},
					],
					name: "El Camino",
					release_date: "2011-12-06",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:5DLhV9yOvZ7IxVmljMXtNm",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
						},
						href: "https://api.spotify.com/v1/artists/7mnBLXK823vNxN3UWB7Gfz",
						id: "7mnBLXK823vNxN3UWB7Gfz",
						name: "The Black Keys",
						type: "artist",
						uri: "spotify:artist:7mnBLXK823vNxN3UWB7Gfz",
					},
				],
				disc_number: 1,
				duration_ms: 251266,
				explicit: false,
				external_ids: {
					isrc: "USNO11100276",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1PXsUXSM3LF2XNSkmIldPb",
				},
				href: "https://api.spotify.com/v1/tracks/1PXsUXSM3LF2XNSkmIldPb",
				id: "1PXsUXSM3LF2XNSkmIldPb",
				is_local: false,
				is_playable: true,
				name: "Little Black Submarines",
				popularity: 65,
				preview_url:
					"https://p.scdn.co/mp3-preview/efdf4f0a648ca29cb6990e701c7b8b6a6cf040c3?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 4,
				type: "track",
				uri: "spotify:track:1PXsUXSM3LF2XNSkmIldPb",
			},
		},
		{
			added_at: "2020-11-09T22:33:41Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/6qyi8X6MdP1lu6B1K6yh3h",
							},
							href:
								"https://api.spotify.com/v1/artists/6qyi8X6MdP1lu6B1K6yh3h",
							id: "6qyi8X6MdP1lu6B1K6yh3h",
							name: "Silversun Pickups",
							type: "artist",
							uri: "spotify:artist:6qyi8X6MdP1lu6B1K6yh3h",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2Qr40p1sv6NYrf9NPehsrO",
					},
					href: "https://api.spotify.com/v1/albums/2Qr40p1sv6NYrf9NPehsrO",
					id: "2Qr40p1sv6NYrf9NPehsrO",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2739caa0b7bb4d3966f6fb2a266",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e029caa0b7bb4d3966f6fb2a266",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048519caa0b7bb4d3966f6fb2a266",
							width: 64,
						},
					],
					name: "Carnavas",
					release_date: "2006-07-25",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:2Qr40p1sv6NYrf9NPehsrO",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/6qyi8X6MdP1lu6B1K6yh3h",
						},
						href: "https://api.spotify.com/v1/artists/6qyi8X6MdP1lu6B1K6yh3h",
						id: "6qyi8X6MdP1lu6B1K6yh3h",
						name: "Silversun Pickups",
						type: "artist",
						uri: "spotify:artist:6qyi8X6MdP1lu6B1K6yh3h",
					},
				],
				disc_number: 1,
				duration_ms: 354360,
				explicit: false,
				external_ids: {
					isrc: "US3R20600207",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1aDLUzCyYpRXgrjwUWzV2X",
				},
				href: "https://api.spotify.com/v1/tracks/1aDLUzCyYpRXgrjwUWzV2X",
				id: "1aDLUzCyYpRXgrjwUWzV2X",
				is_local: false,
				is_playable: true,
				name: "Lazy Eye",
				popularity: 66,
				preview_url:
					"https://p.scdn.co/mp3-preview/4596d41cd35db5dcdda009ea3af49dd6aa294320?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 7,
				type: "track",
				uri: "spotify:track:1aDLUzCyYpRXgrjwUWzV2X",
			},
		},
		{
			added_at: "2020-11-09T22:33:20Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
							},
							href:
								"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
							id: "7jy3rLJdDQY21OgRLCZ9sD",
							name: "Foo Fighters",
							type: "artist",
							uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/6KMkuqIwKkwUhUYRPL6dUc",
					},
					href: "https://api.spotify.com/v1/albums/6KMkuqIwKkwUhUYRPL6dUc",
					id: "6KMkuqIwKkwUhUYRPL6dUc",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2735a1c14ac0fba3e842600d6bd",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e025a1c14ac0fba3e842600d6bd",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048515a1c14ac0fba3e842600d6bd",
							width: 64,
						},
					],
					name: "Concrete and Gold",
					release_date: "2017-09-15",
					release_date_precision: "day",
					total_tracks: 11,
					type: "album",
					uri: "spotify:album:6KMkuqIwKkwUhUYRPL6dUc",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
						},
						href: "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
						id: "7jy3rLJdDQY21OgRLCZ9sD",
						name: "Foo Fighters",
						type: "artist",
						uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
					},
				],
				disc_number: 1,
				duration_ms: 323373,
				explicit: false,
				external_ids: {
					isrc: "USRW31700013",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/1wLQwg0mloy3yXjL0jPE0N",
				},
				href: "https://api.spotify.com/v1/tracks/1wLQwg0mloy3yXjL0jPE0N",
				id: "1wLQwg0mloy3yXjL0jPE0N",
				is_local: false,
				is_playable: true,
				name: "Run",
				popularity: 62,
				preview_url:
					"https://p.scdn.co/mp3-preview/fded09b73c6308a8e8dccfad257bee228848481a?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 2,
				type: "track",
				uri: "spotify:track:1wLQwg0mloy3yXjL0jPE0N",
			},
		},
		{
			added_at: "2020-11-09T22:33:01Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
							},
							href:
								"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
							id: "7jy3rLJdDQY21OgRLCZ9sD",
							name: "Foo Fighters",
							type: "artist",
							uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/1zQ6F8gMagKcPL4SoA80cx",
					},
					href: "https://api.spotify.com/v1/albums/1zQ6F8gMagKcPL4SoA80cx",
					id: "1zQ6F8gMagKcPL4SoA80cx",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b273b00ee453b3496535eaa6e4b3",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e02b00ee453b3496535eaa6e4b3",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d00004851b00ee453b3496535eaa6e4b3",
							width: 64,
						},
					],
					name: "One By One (Expanded Edition)",
					release_date: "2002-10-22",
					release_date_precision: "day",
					total_tracks: 17,
					type: "album",
					uri: "spotify:album:1zQ6F8gMagKcPL4SoA80cx",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
						},
						href: "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
						id: "7jy3rLJdDQY21OgRLCZ9sD",
						name: "Foo Fighters",
						type: "artist",
						uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
					},
				],
				disc_number: 1,
				duration_ms: 265560,
				explicit: false,
				external_ids: {
					isrc: "USRW30200005",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/67vYdAAM3oGsEImCRfbtsF",
				},
				href: "https://api.spotify.com/v1/tracks/67vYdAAM3oGsEImCRfbtsF",
				id: "67vYdAAM3oGsEImCRfbtsF",
				is_local: false,
				is_playable: true,
				name: "Times Like These",
				popularity: 68,
				preview_url:
					"https://p.scdn.co/mp3-preview/8460d3736201b16537ccaf39fed52cada0b3be8d?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 4,
				type: "track",
				uri: "spotify:track:67vYdAAM3oGsEImCRfbtsF",
			},
		},
		{
			added_at: "2020-11-09T22:32:58Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
							},
							href:
								"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
							id: "7jy3rLJdDQY21OgRLCZ9sD",
							name: "Foo Fighters",
							type: "artist",
							uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/30ly6F6Xl0TKmyBCU50Khv",
					},
					href: "https://api.spotify.com/v1/albums/30ly6F6Xl0TKmyBCU50Khv",
					id: "30ly6F6Xl0TKmyBCU50Khv",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2730389027010b78a5e7dce426b",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e020389027010b78a5e7dce426b",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048510389027010b78a5e7dce426b",
							width: 64,
						},
					],
					name: "The Colour And The Shape",
					release_date: "1997-05-20",
					release_date_precision: "day",
					total_tracks: 14,
					type: "album",
					uri: "spotify:album:30ly6F6Xl0TKmyBCU50Khv",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
						},
						href: "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
						id: "7jy3rLJdDQY21OgRLCZ9sD",
						name: "Foo Fighters",
						type: "artist",
						uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
					},
				],
				disc_number: 1,
				duration_ms: 260026,
				explicit: false,
				external_ids: {
					isrc: "USRW29600007",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/4dVbhS6OiYvFikshyaQaCN",
				},
				href: "https://api.spotify.com/v1/tracks/4dVbhS6OiYvFikshyaQaCN",
				id: "4dVbhS6OiYvFikshyaQaCN",
				is_local: false,
				is_playable: true,
				name: "My Hero",
				popularity: 70,
				preview_url:
					"https://p.scdn.co/mp3-preview/ea1fb01ec4f28f204b1591c2953d1f6c886941e2?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 7,
				type: "track",
				uri: "spotify:track:4dVbhS6OiYvFikshyaQaCN",
			},
		},
		{
			added_at: "2020-11-09T22:32:56Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
							},
							href:
								"https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
							id: "7jy3rLJdDQY21OgRLCZ9sD",
							name: "Foo Fighters",
							type: "artist",
							uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/30ly6F6Xl0TKmyBCU50Khv",
					},
					href: "https://api.spotify.com/v1/albums/30ly6F6Xl0TKmyBCU50Khv",
					id: "30ly6F6Xl0TKmyBCU50Khv",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2730389027010b78a5e7dce426b",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e020389027010b78a5e7dce426b",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048510389027010b78a5e7dce426b",
							width: 64,
						},
					],
					name: "The Colour And The Shape",
					release_date: "1997-05-20",
					release_date_precision: "day",
					total_tracks: 14,
					type: "album",
					uri: "spotify:album:30ly6F6Xl0TKmyBCU50Khv",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/7jy3rLJdDQY21OgRLCZ9sD",
						},
						href: "https://api.spotify.com/v1/artists/7jy3rLJdDQY21OgRLCZ9sD",
						id: "7jy3rLJdDQY21OgRLCZ9sD",
						name: "Foo Fighters",
						type: "artist",
						uri: "spotify:artist:7jy3rLJdDQY21OgRLCZ9sD",
					},
				],
				disc_number: 1,
				duration_ms: 231480,
				explicit: false,
				external_ids: {
					isrc: "USRW29600001",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/44wXefe8WB9Fd6xwtmAwbR",
				},
				href: "https://api.spotify.com/v1/tracks/44wXefe8WB9Fd6xwtmAwbR",
				id: "44wXefe8WB9Fd6xwtmAwbR",
				is_local: false,
				is_playable: true,
				name: "Monkey Wrench",
				popularity: 68,
				preview_url:
					"https://p.scdn.co/mp3-preview/7f98be705f7db05e0c3e291d80bb158124983232?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 2,
				type: "track",
				uri: "spotify:track:44wXefe8WB9Fd6xwtmAwbR",
			},
		},
		{
			added_at: "2020-11-09T22:32:26Z",
			track: {
				album: {
					album_type: "single",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/3JnCy7tffnn9EBDGk8ytQS",
							},
							href:
								"https://api.spotify.com/v1/artists/3JnCy7tffnn9EBDGk8ytQS",
							id: "3JnCy7tffnn9EBDGk8ytQS",
							name: "Swamp",
							type: "artist",
							uri: "spotify:artist:3JnCy7tffnn9EBDGk8ytQS",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/325vaJdKjifkkSISjTx03x",
					},
					href: "https://api.spotify.com/v1/albums/325vaJdKjifkkSISjTx03x",
					id: "325vaJdKjifkkSISjTx03x",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b2737146cea8e05da7f9484151cf",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e027146cea8e05da7f9484151cf",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d000048517146cea8e05da7f9484151cf",
							width: 64,
						},
					],
					name: "Get Gone",
					release_date: "2020-03-18",
					release_date_precision: "day",
					total_tracks: 1,
					type: "album",
					uri: "spotify:album:325vaJdKjifkkSISjTx03x",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/3JnCy7tffnn9EBDGk8ytQS",
						},
						href: "https://api.spotify.com/v1/artists/3JnCy7tffnn9EBDGk8ytQS",
						id: "3JnCy7tffnn9EBDGk8ytQS",
						name: "Swamp",
						type: "artist",
						uri: "spotify:artist:3JnCy7tffnn9EBDGk8ytQS",
					},
				],
				disc_number: 1,
				duration_ms: 185597,
				explicit: false,
				external_ids: {
					isrc: "AUXN22028119",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/0adTUwT73q2Y5yfzGN5Aln",
				},
				href: "https://api.spotify.com/v1/tracks/0adTUwT73q2Y5yfzGN5Aln",
				id: "0adTUwT73q2Y5yfzGN5Aln",
				is_local: false,
				is_playable: true,
				name: "Get Gone",
				popularity: 33,
				preview_url:
					"https://p.scdn.co/mp3-preview/0fc57b58b8000800a4eed8c9d2d5336f517bffa4?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 1,
				type: "track",
				uri: "spotify:track:0adTUwT73q2Y5yfzGN5Aln",
			},
		},
		{
			added_at: "2020-11-08T23:06:13Z",
			track: {
				album: {
					album_type: "album",
					artists: [
						{
							external_urls: {
								spotify:
									"https://open.spotify.com/artist/4gFssfOmWNY3LfIZ3zyoy4",
							},
							href:
								"https://api.spotify.com/v1/artists/4gFssfOmWNY3LfIZ3zyoy4",
							id: "4gFssfOmWNY3LfIZ3zyoy4",
							name: "Punch Brothers",
							type: "artist",
							uri: "spotify:artist:4gFssfOmWNY3LfIZ3zyoy4",
						},
					],
					external_urls: {
						spotify: "https://open.spotify.com/album/2Jx5MfwDujgz2rFFDVocYl",
					},
					href: "https://api.spotify.com/v1/albums/2Jx5MfwDujgz2rFFDVocYl",
					id: "2Jx5MfwDujgz2rFFDVocYl",
					images: [
						{
							height: 640,
							url:
								"https://i.scdn.co/image/ab67616d0000b273021120cd904ce1fbd5f1d554",
							width: 640,
						},
						{
							height: 300,
							url:
								"https://i.scdn.co/image/ab67616d00001e02021120cd904ce1fbd5f1d554",
							width: 300,
						},
						{
							height: 64,
							url:
								"https://i.scdn.co/image/ab67616d00004851021120cd904ce1fbd5f1d554",
							width: 64,
						},
					],
					name: "All Ashore",
					release_date: "2018-07-20",
					release_date_precision: "day",
					total_tracks: 9,
					type: "album",
					uri: "spotify:album:2Jx5MfwDujgz2rFFDVocYl",
				},
				artists: [
					{
						external_urls: {
							spotify:
								"https://open.spotify.com/artist/4gFssfOmWNY3LfIZ3zyoy4",
						},
						href: "https://api.spotify.com/v1/artists/4gFssfOmWNY3LfIZ3zyoy4",
						id: "4gFssfOmWNY3LfIZ3zyoy4",
						name: "Punch Brothers",
						type: "artist",
						uri: "spotify:artist:4gFssfOmWNY3LfIZ3zyoy4",
					},
				],
				disc_number: 1,
				duration_ms: 425360,
				explicit: false,
				external_ids: {
					isrc: "USNO11800340",
				},
				external_urls: {
					spotify: "https://open.spotify.com/track/3rSpUHBDRFr4MiFOjyEWvP",
				},
				href: "https://api.spotify.com/v1/tracks/3rSpUHBDRFr4MiFOjyEWvP",
				id: "3rSpUHBDRFr4MiFOjyEWvP",
				is_local: false,
				is_playable: true,
				name: "All Ashore",
				popularity: 42,
				preview_url:
					"https://p.scdn.co/mp3-preview/58effc4af604a30d77ff83b5fb27b23c72051cc1?cid=774b29d4f13844c495f206cafdad9c86",
				track_number: 1,
				type: "track",
				uri: "spotify:track:3rSpUHBDRFr4MiFOjyEWvP",
			},
		},
	],
});
