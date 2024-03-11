import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalFont from "./fonts/GlobalFont";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<div>
		<GlobalFont />
		<App />
	</div>
);
