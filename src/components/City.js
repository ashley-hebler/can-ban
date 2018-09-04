import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";
import Fish from "../img/Fish.js";
import Falls from "../img/Falls.js";
import Flag from "../img/Flag.js";
import Boat from "../img/Boat.js";
import Water from "../img/Water.js";
import Plus from "../img/Plus.js";

const components = {
  fish: Fish,
  falls: Falls,
  boat: Boat,
  water: Water
};
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
          {/* <Flag
            marker={`city__status-icon city__status-icon--${
              this.props.info.color
            }`}
          /> */}
          <h3 className="city__status-text">{this.props.info.status}</h3>
        </div>
      );
    }
  }
  render() {
    const Icon = components[this.props.info.icon];
    const isCanBan = this.props.info.canBan;
    return (
      // <section
      //   className={`city city--${this.props.info.icon} ${
      //     this.props.transitionClass
      //   } ${this.props.compact ? "compact" : "default"}`}
      // >
      //   <div className={`city__upper city__upper--${this.props.info.icon}`}>
      //     <Icon marker={`city__icon city__icon--${this.props.info.icon}`} />
      //     <h2 className="city__title">{this.props.info.rivers}</h2>
      //     <p className="city__subtitle">{this.props.info.name}</p>
      //     {this.renderLink()}
      //     {this.renderStatus()}
      //   </div>
      // </section>
      <section
        className={`city city--${this.props.info.icon} ${
          this.props.transitionClass
        } ${this.props.compact ? "compact" : "default"}`}
      >
        <Link className="city__link" to={slugify(this.props.info.rivers)}>
          <span className="sr-only">{this.props.info.name} River Rules</span>
        </Link>
        <div className="city__col">
          <h2 className="city__title">
            {/* <Water marker={`city__icon city__icon--river`} /> */}
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
            className={`city__icon-main city__icon-main--${
              isCanBan ? `error` : `success`
            }`}
          >
            <use xlinkHref="#can" />
          </svg>
          {isCanBan && (
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
