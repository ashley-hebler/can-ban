import React, { Component } from 'react';
const ReactMarkdown = require('react-markdown');
class TextBody extends Component {
  render() {
    return (
      <div className="text-body">
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
