import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Ref, Segment, Sticky } from "semantic-ui-react";
import { Navbar, Footer } from "./components/Layout";
import { Player } from "./components/Player";
import { Routes } from "./routes";

const App = () => {
	const contextRef = createContext();

	return (
		<Router>
			<Sticky context={contextRef}>
				<Navbar isAuthenticated={false} />
			</Sticky>
			<div ref={contextRef} className="wrapper">
				<div className="content">
					<div className="contentDynamic">
						<Routes />
					</div>
				</div>
				<Footer className="footer" />
			</div>
		</Router>
	);
};

export default App;
