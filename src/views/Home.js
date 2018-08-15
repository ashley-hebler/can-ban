import React from "react";

import Hero from "../components/Hero";
import CityList from "../components/CityList";
import Ad from "../components/Ad";
import allText from "../text/all.json";
const ReactMarkdown = require("react-markdown");

class Home extends React.Component {
  render() {
    return (
      <div>
        <CityList cities={this.props.cities} last={this.props.last} />
        <Hero heroData={this.props.heroData} />
        <div className="text-block">
          <div className="text-block__inner container container--small">
            <ReactMarkdown source={allText["littering"]} escapeHtml={true} />
          </div>
        </div>
        {/* <div className="ad">
          <Ad />
        </div> */}
      </div>
    );
  }
}
export default Home;
