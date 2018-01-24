function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
		return action(dispatch, getState, extraArgument);
    } else if (typeof action.then === 'function') {
		action
			.then(result => {
				console.warn('then')
				console.info(result)
				return next(result)
			})
			.catch(err => {
				console.warn('err')
				console.error(err)
				return next(err)
			});
	}

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
