import React from 'react'

export const PlacesView = props => (
	<div>
		<h3>Find a Place</h3>
		<p>Use this to find a place, auto-completing from Google Places API.</p>
		<form>
				<label>
					Find a place:
					<input type="text" onChange={props.onChange} defaultValue={props.text} />
				</label>
		</form>
		<div>
			{props.places.map(place => (
				<p key={place.id}>{place.description}</p>
			))}
		</div>
	</div>
);
