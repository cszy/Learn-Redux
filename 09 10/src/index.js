import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

const router = (
	<Provider store={store}>
		<BrowserRouter history={history}>
			<div>
				<Route path='/' component={App} />
				<Switch>
			    	<Route exact path='/' component={PhotoGrid} />
			    	<Route path="/view/:postId" component={Single}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>
)

ReactDOM.render(router, document.getElementById('root'));