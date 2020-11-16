import React, { useState, useEffect, useReducer, useRef, useCallback } from "react";
import _ from "lodash";
import PropTypes from "prop-types";
import { Search, Grid, Header, Segment, createHTMLImage } from "semantic-ui-react";
//import { searchOptions } from "../../data/searchData";

import SearchRender from "./SearchRender";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchSelectionState } from "../../recoil/atoms";
import { profileListSelector } from "../../recoil/selectors";

const initialState = {
	loading: false,
	results: [],
	value: "",
};

const searchReducer = (state, action) => {
	switch (action.type) {
		case "CLEAN_QUERY":
			return initialState;
		case "START_SEARCH":
			return { ...state, loading: true, value: action.query };
		case "FINISH_SEARCH":
			return { ...state, loading: false, results: action.results };
		case "UPDATE_SELECTION":
			return { ...state, value: action.selection };

		default:
			throw new Error();
	}
};

const SearchBar = (props) => {
	const [state, dispatch] = useReducer(searchReducer, initialState);
	const { loading, results, value } = state;
	const [selection, setSelection] = useRecoilState(searchSelectionState);
	const searchList = useRecoilValue(profileListSelector);
	console.debug({ searchList });
	const searchOptions = [];
	searchList.map((item) => {
		const option = {
			title: item.title,
			description: item.description,
			price: item.metadata.profileType,
			image: item.image,
		};
		searchOptions.push(option);
	});
	const navigate = useNavigate();

	const timeoutRef = useRef();
	const handleSearchChange = useCallback(
		(e, data) => {
			clearTimeout(timeoutRef.current);
			dispatch({ type: "START_SEARCH", query: data.value });

			timeoutRef.current = setTimeout(() => {
				if (data.value.length === 0) {
					dispatch({ type: "CLEAN_QUERY" });
					return;
				}

				const re = new RegExp(_.escapeRegExp(data.value), "i");

				const isMatch = (result) => re.test(result.title);
				console.debug({ isMatch, searchOptions, result: re });
				dispatch({
					type: "FINISH_SEARCH",
					results: _.filter(searchOptions, isMatch),
				});
			}, 300);
		},
		[searchOptions],
	);

	const handleClick = useCallback((e, data) => {
		console.debug({ e });
	});
	useEffect(() => {
		return () => {
			clearTimeout(timeoutRef.current);
		};
	}, []);
	return (
		<Search
			loading={loading}
			onResultSelect={(e, data) => {
				setSelection(data.result);
				console.debug({ selection, clicked: data.result.title });
				navigate(`/profile/${data.result.id}`);
				dispatch({
					type: "UPDATE_SELECTION",
					selection: data.result.title,
				});
			}}
			onSearchChange={handleSearchChange}
			results={results}
			value={value}
		/>
	);
};

SearchBar.propTypes = {};

export default SearchBar;
