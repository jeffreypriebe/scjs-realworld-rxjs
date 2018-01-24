import React from 'react'

export const ChannelStatus = props => {
	const { busy } = props;
	const color = busy ? '#900' : '#000';

	return (
		<div>
			<h3>Slack Channel Status</h3>
			<p>Imagine a busy slack channel, and you want to indicate whether anyone is currently typing in the channel.</p>
			<p>Channel: people are <span style={{ color }}>{!busy ? 'not ': ''}typing</span></p>
		</div>
	);
};
