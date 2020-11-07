import React from "react";
import ReactDOM from "react-dom";

import { RecoilRoot } from "recoil";
import { DebugObserver } from "./recoil/snapshots";
import App from "./App";

import "semantic-ui-css/semantic.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<RecoilRoot>
		<DebugObserver />
		<App />
	</RecoilRoot>,
	document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
