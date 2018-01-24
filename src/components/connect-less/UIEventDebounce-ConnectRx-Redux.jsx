import React, { PureComponent } from 'react';

import { getPlacesRx, places$ } from '../../actions/places-rx-redux';
import { PlacesView } from '../ui-events-debounce/PlacesView';

export class UIEventsDebounceRxConnectlessRedux extends PureComponent {
	state = {
		text: undefined,
		places: [],
	}

	componentDidMount() {
		places$.subscribe(places => this.setState({ places }));
	}

	textChange = evt => {
		const { value: text } = evt.target;
		this.setState({ text }, () => {
			getPlacesRx(text); // debounced in action
		});
	}

	render() {
		const { places, text } = this.state;

		return <PlacesView text={text} places={places} onChange={this.textChange} />
	}
};
