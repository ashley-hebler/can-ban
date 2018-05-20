import React, { Component } from "react";

import Hero from "../components/Hero";
import CityList from "../components/CityList";
const ReactMarkdown = require("react-markdown");

class Subpage2 extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <CityList cities={this.props.cities} />
        <Hero heroData={this.props.heroData} />
        <div className="text-block">
          <div className="text-block__inner container container--small">
            <ReactMarkdown source={this.props.source} />
          </div>
        </div>
      </div>
    );
  }
}

export default Subpage2;
