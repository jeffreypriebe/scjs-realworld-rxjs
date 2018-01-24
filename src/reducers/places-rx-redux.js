import { getPlacesType } from '../actions/places-rx-redux';

const initialState = { places: [] };

export const placesRxRedux = (state = initialState, action) => {
	const { type, payload }	= action;

	switch(type) {
		case getPlacesType:
			return {
				...state,
				places: payload ? payload.predictions : [],
			}
		default: return state;
	}
};
