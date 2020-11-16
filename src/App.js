import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Ref, Segment, Sticky } from "semantic-ui-react";
import { Navbar } from "./components/Layout";
import { Player } from "./components/Player";
import { Routes } from "./routes";

const App = () => {
	const contextRef = createContext();

	return (
		<Router>
			<div ref={contextRef}>
				<Sticky context={contextRef}>
					<Navbar isAuthenticated={false} />
				</Sticky>
				<Player />
				<Segment attached="bottom">
					<Routes />
				</Segment>
			</div>
		</Router>
	);
};

export default App;
