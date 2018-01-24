const params = 'location=36.97411709999999,-122.03079630000002&radius=3000&key=AIzaSyB7JUB7FGIa7rqwR0WEio_ZO6t8r4q_UkE';

export const getPlaces = async input => {
	const result = await fetch(
		`http://localhost:3001/maps/api/place/autocomplete/json?${params}&input=${input}`,
		{ mode: 'cors' },
	);

	const payload = result.json();

	return {
		type: 'places',
		payload,
	};
};
