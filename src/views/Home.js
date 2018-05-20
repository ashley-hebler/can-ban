import React from "react";

import Hero from "../components/Hero";
import CityList from "../components/CityList";
const ReactMarkdown = require("react-markdown");

class Home extends React.Component {
  render() {
    return (
      <div>
        <CityList cities={this.props.cities} last={this.props.last}/>
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
export default Home;
