import React from 'react';
import { Router, hashHistory } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { getCountries } from "./actions/actions-countries";
import store from './store';
import routes from './routes';
import DevTools from './DevTools';

render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory} routes={routes}>

            </Router>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getCountries());