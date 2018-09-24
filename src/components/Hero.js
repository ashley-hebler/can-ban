import React from 'react';

class Hero extends React.Component {
  render() {
    return (
      <section className={`hero hero--${this.props.heroData.index}`}>
        <div className="hero__upper">
          <h1 className="hero__title">{this.props.heroData.main}</h1>
        </div>
      </section>
    );
  }
}
export default Hero;
