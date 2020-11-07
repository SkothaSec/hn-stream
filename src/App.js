import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components/Layout";
import { Routes } from "./routes";

const App = () => {
	return (
		<Router>
			<Navbar isAuthenticated={false} />
			<Routes />
		</Router>
	);
};

export default App;
