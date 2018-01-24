import React from 'react';
import { Link } from 'react-router-dom';

const examples = [
	{
		id: 'ui-events-debounce',
		label: 'UI Events Debounce',
	},
	{
		id: 'socket-data',
		label: 'Socket Data',
	},
];

export const ExampleList = () => (
	<ul>
		{examples.map(({ id, label }, index) => (
			<li key={`${id}-li`}>
				{label}
				: <Link key={`${id}-A`} to={`${index + 1}-${id}`}>Non-Reactive</Link>
				: <Link key={`${id}-B`} to={`${index + 1}-${id}-Rx`}>RxJS</Link>
			</li>
		))}
		<li>
			Connect Less (UI Events)
			: <Link to="/3-ui-events-connect-less">Rx</Link>
			: <Link to="/3-ui-events-connect-less-redux">Redux</Link>
		</li>
	</ul>
);
