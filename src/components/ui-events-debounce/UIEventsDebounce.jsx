import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPlaces } from '../../actions';
import { PlacesView } from './PlacesView';

export class UIEventsDebounceComp extends PureComponent {
	state = {
		text: undefined,
	}

	textChange = evt => {
		const { value: text } = evt.target;
		this.setState({ text }, () => {
			this.props.getPlaces(text);
		});
	}

//
	// textChange = evt => {
	// 	const { value: text } = evt.target;
	// 	if (this.timeout) clearTimeout(this.timeout);

	// 	this.timeout = setTimeout(() => {
	// 		this.setState({ text }, () => {
	// 			this.props.getPlaces(text);
	// 		});
	// 	}, 400);
	// }
//

	render() {
		const { text } = this.state;
		const { places } = this.props;

		return <PlacesView text={text} places={places} onChange={this.textChange} />
	}
};

export const UIEventsDebounce = connect(
	({ places: { places } }) => ({ places }),
	dispatch => bindActionCreators({ getPlaces }, dispatch),
)(UIEventsDebounceComp);
