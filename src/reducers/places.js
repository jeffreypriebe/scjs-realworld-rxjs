import { getPlacesType } from '../actions';

const initialState = { places: [] };

export const places = (state = initialState, action) => {
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
