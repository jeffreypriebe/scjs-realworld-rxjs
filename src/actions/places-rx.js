import { Subject } from 'rxjs';

const params = 'location=36.97411709999999,-122.03079630000002&radius=15000&strictbounds&key=AIzaSyBvTPKa5AIVmfwUkFMlekQu6PEO9ekNe_k';

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

	const { predictions } = await result.json();
	console.log(predictions)

	places$.next(predictions);
};
