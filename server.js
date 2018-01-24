const http = require('http');
const fetch = require('node-fetch');
const WebSocket = require('ws');

const routes = [
	{ m: /^\/maps/, p: 'https://maps.googleapis.com/' },
];

// http proxy
const server = http.createServer((req, res) => {
	const route = routes.find(x => x.m.test(req.url));
	if (route === 0) {
		res.statusCode = 404;
		res.end();
		return;
	}

	res.setHeader('Access-Control-Allow-Origin', "http://localhost:3000");

	fetch(route.p + req.url)
		.then(result => {

			result.json()
				.then(body => {
					res.write(JSON.stringify(body));
					res.statusCode = result.statusCode;
					res.end();
				});
		});
});

server.listen(3001);

//socket
const wss = new WebSocket.Server({ port: 3002 });

wss.on('connection', ws => {
	let sum = 1;
	const messanger = setInterval(() => {
		const r = Math.round(Math.random() * 4 + 1);
		if (r <= 3) message = sum;
		else message = (r === 4 || sum <= 0) ? sum += 1 : sum -= 1;
		try {
			ws.send(message.toString());
		}
		catch (ex) {
			clearInterval(messanger);
		}
	}, 300);
	setInterval(() => { sum = 0; }, 3000);
	ws.on('error', () => ws.terminate());
});
