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
    label: "waves",
    name: "Marek Polakovic",
    file: "water",
    url: "https://thenounproject.com/search/?q=waves&i=298181"
  },
  {
    label: "can",
    name: "dDara",
    file: "can",
    url: "https://thenounproject.com/search/?q=can&i=1389558"
  },
  {
    label: "kayak",
    name: "Larisa Skosyrska",
    file: "boat",
    url: "https://thenounproject.com/search/?q=kayak&i=163433"
  },
  {
    label: "river fish",
    name: "Artem Kovyazin",
    file: "fish",
    url: "https://thenounproject.com/search/?q=river%20fish&i=1540907"
  }
];

class IconCredits extends React.Component {
  state = {
    source: ""
  };
  render() {
    return (
      <div className="about">
        <div className="about__inner container">
          <TextBody text={allText["about"]} />
          <ul class="icon-list">
            {Object.keys(iconAttr).map(key => (
              <li key={key} className="icon-list__item">
                <a href={iconAttr[key].url} className="icon-list__link">
                  <svg className="icon-list__icon">
                    <use xlinkHref={`#${iconAttr[key].file}`} />
                  </svg>
                  <span>
                    "{iconAttr[key].label}" by {iconAttr[key].name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default IconCredits;
