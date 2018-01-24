const params = 'location=36.97411709999999,-122.03079630000002&radius=15000&strictbounds&key=AIzaSyBvTPKa5AIVmfwUkFMlekQu6PEO9ekNe_k';

export const getPlacesType = 'GET_PLACES';

export const getPlaces = async input => {
	if (!input) return { type: getPlacesType, payload: undefined };

	const result = await fetch(
		`http://localhost:3001/maps/api/place/autocomplete/json?${params}&input=${input}`,
		{ mode: 'cors' },
	);

	const payload = result.json();

	return {
		type: getPlacesType,
		payload,
	};
};
