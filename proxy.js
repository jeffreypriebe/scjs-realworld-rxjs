const http = require('http');
const fetch = require('node-fetch');

const routes = [
	{ m: /^\/maps/, p: 'https://maps.googleapis.com/' },
];

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
