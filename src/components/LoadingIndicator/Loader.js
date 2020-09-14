import React from 'react';
import './Loader.css';

export default class Loader extends React.Component {
	render() {
		return (
			<div className="cards__loader">
				<div className="cards__loader--container">
					<div className="cards-shimmer cards__loader-one"></div>
					<div className="cards-shimmer cards__loader-two"></div>
				</div>		
			</div>
		);
	}
}