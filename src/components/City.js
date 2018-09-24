import React from 'react';
import { Link } from 'react-router-dom';
import { slugify } from '../helpers';
import Plus from '../img/Plus.js';

class City extends React.Component {
  renderLink() {
    if (this.props.compact) {
      return (
        <Link
          to={slugify(this.props.info.name)}
          className={`city__btn city__btn--${this.props.info.icon}`}
        >
          <Plus
            marker={`city__more-icon city__more-icon--${this.props.info.color}`}
          />
          <span>Read More</span>
        </Link>
      );
    }
  }
  renderStatus() {
    if (this.props.compact) {
      return (
        <div className={`city__status city__status--${this.props.info.icon}`}>
          <h3 className="city__status-text">{this.props.info.status}</h3>
        </div>
      );
    }
  }
  renderClass() {
    if ('Guadalupe' === this.props.info.rivers) {
      return 'caution';
    }
    if (this.props.info.canBan) {
      return 'error';
    }
    return 'success';
  }
  render() {
    const isCanBan = this.props.info.canBan;
    return (
      <section
        className={`city ${this.props.transitionClass} ${
          this.props.compact ? 'compact' : 'default'
        }`}
      >
        <Link className="city__link" to={slugify(this.props.info.rivers)}>
          <span className="sr-only">{this.props.info.name} River Rules</span>
        </Link>
        <div className="city__col">
          <h2 className="city__title">
            <svg className="city__icon city__icon--river">
              <use xlinkHref="#water" />
            </svg>
            {this.props.info.rivers}
          </h2>
          {this.renderStatus()}
          <p className="city__subtitle">{this.props.info.name}</p>
        </div>
        <div className={`city__col city__col--wide`}>
          <svg
            className={`city__icon-main city__icon-main--${this.renderClass()}`}
          >
            <use xlinkHref="#can" />
          </svg>
          {isCanBan &&
            'Guadalupe' !== this.props.info.rivers && (
              <svg className="city__close">
                <use xlinkHref="#close" />
              </svg>
            )}
        </div>
      </section>
    );
  }
}

export default City;
