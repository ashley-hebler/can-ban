import React from 'react';
import Texas from '../img/Texas.js';
class Hero extends React.Component {
	render() {
		const includeIcons = this.props.heroData.icons;
		return (
			<section className={`hero hero--${this.props.heroData.index}`}>
				<div className="hero__upper">
					<h1 className="hero__title">{this.props.heroData.main}</h1>
					{includeIcons &&
						<div>
							<Texas marker="hero__icon"/>
							<time className="hero__timestamp" dateTime="2018">2018</time>
						</div>
					}
				</div>
			</section>
		);
	}
}
export default Hero;
