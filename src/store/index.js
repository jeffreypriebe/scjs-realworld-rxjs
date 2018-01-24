export const createThunkMiddleware = extraArgument =>
	({ dispatch, getState }) => next => async action => {
		while (typeof action === 'function') action = action({ dispatch, getState, extraArgument });
		while (action && typeof action.then === 'function') await action.then(a => { action = a; });
		while (action.payload && typeof action.payload.then === 'function') await action.payload.then(payload => { action = { ...action, payload } });

		return (!action) ? null : next(action);
	};

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
