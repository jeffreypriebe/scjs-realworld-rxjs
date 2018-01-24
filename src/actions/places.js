const params = 'location=36.97411709999999,-122.03079630000002&radius=3000&key=AIzaSyC1Ds786gF-1NXYYcHKXaSxb3QULfEzu3Y';

export const getPlaces = async input => {
	const result = await fetch(
		`https://maps.googleapis.com/maps/api/place/autocomplete/json?${params}&input=${input}`,
		{ mode: 'no-cors' }
	);

	const payload = result.json();

	return {
		type: 'places',
		payload,
	};
	// return result;
};
