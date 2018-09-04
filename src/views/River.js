import React from "react";
import City from "../components/City";
import TextBody from "../components/TextBody";
import { Link } from "react-router-dom";
import Arrow from "../img/Arrow.js";
import allText from "../text/all.json";

class River extends React.Component {
  state = {
    source: ""
  };
  componentDidMount() {
    this.props.setRiver(this.props.currentRiver.rivers);
    this.getCompText(this.props.currentRiver.slug);
  }
  getCompText = source => {
    let sourceFile = require(`../text/${source}.md`);
    fetch(sourceFile)
      .then(response => response.text())
      .then(content => {
        this.setState({ source: content });
        return;
      });
  };
  renderMessage() {
    const isCanBan = this.props.currentRiver.canBan;
    const isSpecial = this.props.currentRiver.slug === "guadalupe";
    return (
      <h2 className="river__title">
        The {this.props.currentRiver.rivers} River{" "}
        <span
          className={`river__status--${isCanBan ? "neg" : "pos"} river__status`}
        >
          does {isCanBan ? "not" : ""} currently allow disposable containers
          {isSpecial ? " within New Braunfels city limits" : ""}.
        </span>
      </h2>
    );
  }
  render() {
    return (
      <div className="river">
        <City
          info={this.props.currentRiver}
          transitionClass="none"
          compact={false}
        />
        <div className="container river__text">
          <nav className="river__nav-wrap">
            <Link className="river__nav-item" to="/">
              <Arrow marker="icon" />
              <span>Back</span>
            </Link>
          </nav>
          {this.renderMessage()}
          <TextBody text={allText[this.props.currentRiver.slug]} />
        </div>
      </div>
    );
  }
}
export default River;
