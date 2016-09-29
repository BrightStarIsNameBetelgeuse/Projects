/**
 * Created by mainy on 20.09.2016.
 */
import React from 'react';
import {render} from 'react-dom'
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import App from './components/App'

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));