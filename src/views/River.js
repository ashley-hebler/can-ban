import React from 'react';
import City from '../components/City';
import TextBody from '../components/TextBody';
import { Link } from 'react-router-dom';
import Arrow from '../img/Arrow.js';
import allText from '../text/all.json';
import { isEmpty } from '../helpers';

class River extends React.Component {
  state = {
    source: ''
  };
  componentDidMount() {
    this.props.setRiver(this.props.currentRiver.rivers);
  }
  renderMessage() {
    if (isEmpty(this.props.currentRiver)) {
      return (
        <h2 className="river__title river__title--404">
          <span className={`river__status`}>You floated too far...</span>
        </h2>
      );
    }
    const isCanBan = this.props.currentRiver.canBan;
    const isSpecial = this.props.currentRiver.slug === 'guadalupe';
    return (
      <h2 className="river__title">
        The {this.props.currentRiver.rivers} River{' '}
        <span
          className={`river__status--${isCanBan ? 'neg' : 'pos'} river__status`}
        >
          does {isCanBan ? 'not' : ''} currently allow disposable containers
          {isSpecial ? ' within New Braunfels city limits' : ''}.
        </span>
      </h2>
    );
  }
  render() {
    return (
      <div className="river">
        {!isEmpty(this.props.currentRiver) && (
          <City
            info={this.props.currentRiver}
            transitionClass="none"
            compact={false}
          />
        )}
        <div className="container river__text">
          <nav className="river__nav-wrap">
            <Link className="river__nav-item" to="/">
              <Arrow marker="icon" />
              <span>Back</span>
            </Link>
          </nav>
          {this.renderMessage()}
          {!isEmpty(this.props.currentRiver) && (
            <TextBody text={allText[this.props.currentRiver.slug]} />
          )}
          {isEmpty(this.props.currentRiver) && (
            <TextBody text={allText['no-river']} />
          )}
        </div>
      </div>
    );
  }
}
export default River;
