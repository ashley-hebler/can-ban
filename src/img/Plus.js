import React from 'react';

class Flag extends React.Component {
	render() {
		return (
			<svg className={this.props.marker} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			  <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0-2a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z"/>
			</svg>
		);
	}
}

export default Flag;