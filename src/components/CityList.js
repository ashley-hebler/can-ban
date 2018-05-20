import React from "react";
import City from "../components/City";

class CityList extends React.Component {
  addClassIfLast = name => {
    if (name && name === this.props.last) {
      return "last";
    } else {
      return "normal";
    }
  };
  render() {
    return (
      <div className="city-list">
        {Object.keys(this.props.cities).map(key => (
          <div key={key} index={key} className="city-list__item">
            <City
              info={this.props.cities[key]}
              transitionClass={this.addClassIfLast(this.props.cities[key].name)}
              compact={true}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default CityList;
