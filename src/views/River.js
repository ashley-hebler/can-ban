import React from "react";
import City from "../components/City";

const ReactMarkdown = require("react-markdown");

class River extends React.Component {
  state = {
    source: ""
  };
  componentDidMount() {
    this.props.setRiver(this.props.currentRiver.name);
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
    if (this.props.currentRiver.slug === "new-braunfels-tx") {
      return (
        <h2>
          The Comal River and a portion of the Guadalupe River does currently have a ban on disposable containers within city limits.
        </h2>
      );
    } else {
      return (
        <h2>
          The {this.props.currentRiver.rivers} river does not currently ban
          disposable containers.
        </h2>
      );
    }
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
          {this.renderMessage()}
          <ReactMarkdown source={this.state.source} escapeHtml={false}/>
        </div>
      </div>
    );
  }
}
export default River;
