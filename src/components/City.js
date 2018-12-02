import React from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import { slugify } from '../helpers';

class City extends React.Component {
  state = {
    stats: []
  };
  cleanOutput = content => {
    const clean = DOMPurify.sanitize(content);
    return { __html: clean };
  };
  fetchStats() {
    let siteId = this.props.info.siteId;
    fetch(
      `https://waterservices.usgs.gov/nwis/iv/?sites=${siteId}&period=PT2H&format=json&parameterCd=00060,00065,99976,00011,00021`
    )
      .then(resp => resp.json())
      .catch(err => {
        console.log(err);
      })
      .then(json => {
        try {
          let vals = json.value.timeSeries;
          let valsArr = [];
          vals.forEach(riverVar => {
            let varName = riverVar.variable.variableName;
            let varValue = riverVar.values[0].value[0].value;
            let valLabel = varName.substring(0, varName.indexOf(','));
            let valUnit = varName.substring(
              varName.length,
              varName.indexOf(',') + 1
            );
            valsArr.push({
              val: varValue,
              unit: valUnit,
              label: valLabel
            });
          });
          this.setState({
            stats: valsArr
          });
        } catch (error) {
          console.log(error);
        }
      });
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
  componentDidMount() {
    this.fetchStats();
  }
  render() {
    const isCanBan = this.props.info.canBan;
    const stats = this.state.stats.map((stat, index) => (
      <div
        className="city__stat-block stat-block"
        key={`${this.props.info.siteId}${index}`}
      >
        <h3 className="stat-block__label">{stat.label}</h3>
        <p className="stat-block__val">
          {stat.val}
          <span
            className="stat-block__unit"
            dangerouslySetInnerHTML={this.cleanOutput(stat.unit)}
          />
        </p>
      </div>
    ));
    return (
      <section
        className={`city ${this.props.transitionClass} ${
          this.props.compact ? 'compact' : 'default'
        }`}
      >
        <Link className="city__link" to={slugify(this.props.info.rivers)}>
          <span className="sr-only">{this.props.info.name} River Rules</span>
        </Link>
        <div className="city__border">
          <h2 className="city__title">
            <svg className="city__icon city__icon--river">
              <use xlinkHref="#water" />
            </svg>
            {this.props.info.rivers} River
          </h2>
        </div>
        <div className="city__col">
          {/* <h2 className="city__title">
            <svg className="city__icon city__icon--river">
              <use xlinkHref="#water" />
            </svg>
            {this.props.info.rivers}
          </h2> */}
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
        <div className="city__stats city__border">{stats}</div>
      </section>
    );
  }
}

export default City;
