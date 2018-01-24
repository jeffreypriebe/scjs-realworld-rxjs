import React, { PureComponent } from 'react';
import { Subject } from 'rxjs';

import { ChannelStatus } from './ChannelStatus';

export class SocketDataRx extends PureComponent {
	state = {
		busy: false,
		dataStream$: new Subject(),
	}

	componentDidMount() {
		let ws = new WebSocket('ws://localhost:3002');
		ws.onmessage = ({ data }) => this.state.dataStream$.next(data);

		this.state.dataStream$
			.map(numTyping => numTyping > 0)
			.distinctUntilChanged()
		//
			// .do(v => console.log(v))
			// .distinct()
		//
			.subscribe(busy => this.setState({ busy }));
	}


	render() {
		console.log('render', this.state)

		return <ChannelStatus busy={this.state.busy} />
	}
}
