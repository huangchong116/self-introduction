import React from "react";
import {
	BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Index from "container"

const routes = (
	<Router>
		<div>
			<Switch>
				<Route path="/" exact component={Index}/>
			</Switch>
		</div>
	</Router>
)
export default routes;