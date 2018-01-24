export const createThunkMiddleware = extraArgument =>
	({ dispatch, getState }) => next => async action => {
		while (typeof action === 'function') action = action({ dispatch, getState, extraArgument });
		if (action && typeof action.then === 'function') await action.then(a => { action = a; });

		return (!action) ? null : next(action);
	};

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
