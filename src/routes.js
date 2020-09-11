import React from 'react';

import { BrowserRouter, Switch, Roule, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Main} />
			<Route exact path='/products/:id' component={Product} />
		</Switch>
	</BrowserRouter>
);

export default Routes;