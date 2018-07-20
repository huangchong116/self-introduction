import React from "react";
import {
	BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Index from "container";
import Test from "components/js/test"

const routes = (
	<Router>
		<div>
			<Switch>
				<Route path="/" exact component={Index}/>
				<Route path="/test" component={Test}/>
			</Switch>
		</div>
	</Router>
)
export default routes;