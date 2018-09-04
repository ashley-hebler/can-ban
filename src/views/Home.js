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
        <div className="site-desc">
          <h2 className="site-desc__title">can · ban</h2>
          <span className="site-desc__subtitle">
            \ˈkan-ˈbän\ <em>noun</em>
          </span>
          <h3>Texan for ban against disposable containers on rivers.</h3>
        </div>
        <CityList cities={this.props.cities} last={this.props.last} />
        <div className="site-desc">
          <p>*The Guadalupe River has a ban in place within city limits.</p>
          <p>
            <em>Updated Summer 2018</em>
          </p>
        </div>
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
