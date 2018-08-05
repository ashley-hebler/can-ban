import React, { Component } from "react";
const ReactMarkdown = require("react-markdown");
class TextBody extends Component {
  render() {
    console.log(this.props.text);
    return (
      <div class="text-body">
        <ReactMarkdown
          source={this.props.text}
          escapeHtml={false}
          className="article"
        />
      </div>
    );
  }
}

export default TextBody;
