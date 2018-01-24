import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Subject } from 'rxjs';

import { getPlaces } from '../../actions';
import { PlacesView } from './PlacesView';

export class UIEventsDebounceRxComp extends PureComponent {
	state = {
		text: undefined,
		textStream$: new Subject(),
	}

	componentDidMount() {
		this.state.textStream$
			.debounceTime(400)
			.subscribe(text => this.setState({ text }, () => {
				this.props.getPlaces(text);
			}));
	}

	textChange = evt => {
		const { value: text } = evt.target;
		this.state.textStream$.next(text);
	}

	render() {
		const { text } = this.props;
		const { places } = this.props;

		return <PlacesView text={text} places={places} onChange={this.textChange} />
	}
};

export const UIEventsDebounceRx = connect(
	({ places: { places } }) => ({ places }),
	dispatch => bindActionCreators({ getPlaces }, dispatch),
)(UIEventsDebounceRxComp);
