import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from './store';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { places } from './reducers';
const reducers = { places };

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk),
  ...enhancers
)

const store = createStore(
	combineReducers(reducers),
	composedEnhancers,
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);
registerServiceWorker();
