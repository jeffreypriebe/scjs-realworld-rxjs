import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getPlaces } from '../../actions';

export class UIEventsDebounceComp extends PureComponent {
	state = {
		text: undefined,
		result: [],
	}

	textChange = evt => {
		const { value: text } = evt.target;
		this.setState({ text }, () => {
			this.props.getPlaces(text);
		});
	}

	render() {
		const { results, text } = this.props;

		return (
			<div>
				<h3>Find a Place</h3>
				<p>Use this to find a place, auto-completing from Google Places API.</p>
				<form>
						<label>
							Find a place:
							<input type="text" onChange={this.textChange} defaultValue={text} />
						</label>
				</form>
				<div>
					{/* {results.map} */}
				</div>
			</div>
		);
	}
};

export const UIEventsDebounce = connect(
	null,
	dispatch => bindActionCreators({ getPlaces }, dispatch),
)(UIEventsDebounceComp);
