import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/init.scss';

import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
import App from './App';

render(
		<Router history={history}>
				<App />
		</Router>,
	document.getElementById('app')
);
