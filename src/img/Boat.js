import React from 'react';

class Boat extends React.Component {
  render() {
    return (
      <svg
        className={this.props.marker}
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="-341 263 90 67"
      >
        <path d="M-251 290l-4-2h-23l-3 1-3 1h-4l10-10 3 1 4-2 6-6c2-2 2-5 0-7l-2-2-4-1-3 1-6 6c-2 2-2 5 0 7l-12 12h-20l-3-1h-21c-2 0-3 0-4 2v4l3 6c1 3 5 5 8 5h21l-8 8-4-1-3 2-6 6-2 3 2 4 1 1 4 2 4-2 6-5c1-2 2-5 0-7l10-11h40c3 0 7-2 9-4l4-7v-4zm-27-18l6-5 1-1 2 1 1 1v3l-5 6h-3l-2-1v-4zm-39 49l-5 5-2 1-2-1-1-1v-3l6-6 1-1 2 1 1 1v4zm12-19h-24c-2 0-4-1-5-3l-3-6v-1l1-1h21l3 2h17l-10 9zm51-9l-4 6c-1 2-4 3-6 3h-37l10-9h6l4-1 3-1h24v2z" />
      </svg>
    );
  }
}

export default Boat;
