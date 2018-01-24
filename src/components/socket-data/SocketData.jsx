import React, { PureComponent } from 'react';

import { ChannelStatus } from './ChannelStatus';

export class SocketData extends PureComponent {
	state = {
		busy: false,
	}

	componentDidMount() {
		let ws = new WebSocket('ws://localhost:3002');
		ws.onmessage = ({ data: numTyping }) => this.setState({
			numTyping,
			busy: numTyping > 0,
		});
	//
		// ws.onmessage = ({ data: numTyping }) => {
		// could also use shouldComponentUpdate
		// 	if (this.state.numTyping !== numTyping) this.setState({
		// 		numTyping,
		// 		busy: numTyping > 0
		// 	});
		// };
	//
		// ws.onmessage = ({ data: numTyping }) => {
		// 	const busy = numTyping > 0;
		// 	if (this.state.busy !== busy) this.setState({
		// 		numTyping,
		// 		busy,
		// 	});
		// };
	//
	}


	render() {
		console.log('render', this.state)

		return <ChannelStatus busy={this.state.busy} />
	}
}
