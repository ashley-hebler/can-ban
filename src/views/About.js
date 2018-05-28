import React from "react";
// Icons
import Fish from "../img/Fish.js";
import Falls from "../img/Falls.js";
import Boat from "../img/Boat.js";
import Water from "../img/Water.js";

const ReactMarkdown = require("react-markdown");
const iconAttr = [
  {
    label: "river fish",
    name: "Artem  Kovyazin",
    file: Fish
  },
  {
    label: "Waterfall",
    name: "Luis Prado",
    file: Falls
  },
  {
    label: "Kayak",
    name: "Larisa Skosyrska",
    file: Boat
  },
  {
    label: "waves",
    name: "Marek Polakovic",
    file: Water
  }
];

class IconCredits extends React.Component {
  state = {
    source: ""
  };
  getCompText(source) {
    let sourceFile = require(`../text/${source}.md`);
    fetch(sourceFile)
      .then(response => response.text())
      .then(content => {
        this.setState({ source: content });
        return;
      });
  }
  renderIcon(file) {
    const Icon = file;
    return <Icon marker="icon-list__icon" />;
  }
  componentDidMount() {
    this.getCompText("about");
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about">
        <div className="about__inner container">
          <ReactMarkdown source={this.state.source} />
          <ul class="icon-list">
            {Object.keys(iconAttr).map(key => (
              <li key={key} className="icon-list__item">
                {this.renderIcon(iconAttr[key].file)}
                "{iconAttr[key].label}" by {iconAttr[key].name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default IconCredits;
