import React from "react";
// Icons
import Fish from "../img/Fish.js";
import Falls from "../img/Falls.js";
import Boat from "../img/Boat.js";
import Water from "../img/Water.js";
import TextBody from "../components/TextBody";
import allText from "../text/all.json";

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
  renderIcon(file) {
    const Icon = file;
    return <Icon marker="icon-list__icon" />;
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="about">
        <div className="about__inner container">
          <TextBody text={allText["about"]} />
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
