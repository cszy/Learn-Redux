import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
	<BrowserRouter>
		<div>
			<Route path='/' component={Main} />
			<Switch>
			    <Route exact path='/' component={PhotoGrid} />
			    <Route path="/view/:postId" component={Single}></Route>
			</Switch>
		</div>
	</BrowserRouter>
)

ReactDOM.render(router, document.getElementById('root'));