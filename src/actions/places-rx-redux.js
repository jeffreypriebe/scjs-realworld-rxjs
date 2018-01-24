import { compose, createStore } from 'redux';
import { Subject } from 'rxjs';

import { placesRxRedux } from '../reducers/places-rx-redux';

const params = 'location=36.97411709999999,-122.03079630000002&radius=15000&strictbounds&key=AIzaSyBvTPKa5AIVmfwUkFMlekQu6PEO9ekNe_k';

// redux store - in a 'real' app you'd only have one store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	placesRxRedux,
	composeEnhancers(),
);
// store is middleware free

const store$ = new Subject();

store.subscribe(() => { storeChanged(store.getState()); });


// rx
export const getPlacesType = 'GET_PLACES';

export const places$ = new Subject();

const input$ = new Subject();

export const getPlacesRx = input => input$.next(input);

input$
	.filter(input => !!input)
	.debounceTime(400)
	.subscribe(input => getPlacesApi(input));

const getPlacesApi = async input => {
	// OR, AjaxObservable instead of fetch
	const result = await fetch(
		`http://localhost:3001/maps/api/place/autocomplete/json?${params}&input=${input}`,
		{ mode: 'cors' },
	);

	// What we want of the result moves into the reducer again
	const payload = await result.json();

	// Change back to dispatching into Redux store (not into stream)
	store.dispatch({
		type: getPlacesType,
		payload,
	});
};

//rx + redux here
const storeChanged = reduxState => {
	const { places } = reduxState;

	// Check that we haven't already seen this list
	// With multiple api calls or actions feeding the redux state, this will get called for _all_ store changes
	// As written, a redux state change of 'user login' will send a new `places` into the places$ stream
	places$.next(places);
};

