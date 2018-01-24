export const setupSocket = () => {
	let ws = new WebSocket('ws://localhost:3002');
	ws.onmessage(payload => dispatch({
		type: socketDataType,
		payload,
	}));