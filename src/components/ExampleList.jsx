import React from 'react';
import { Link } from 'react-router-dom';

const examples = [
	{
		id: 'ui-events-debounce',
		label: 'UI Events Debounce',
	},
];

export const ExampleList = () => (
	<ul>
		<li>
			{examples.map(({ id, label }, index) => (
				<span>
					{label}
					: <Link key={id} to={`${index + 1}-${id}-A`}>Non-Reactive</Link>
					: <Link key={id} to={`${index + 1}-${id}-B`}>RxJS</Link>
				</span>
			))}
		</li>
	</ul>
);
