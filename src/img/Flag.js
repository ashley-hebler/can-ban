import React from 'react';

class Flag extends React.Component {
  render() {
    return (
      <svg
        className={this.props.marker}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M4 24H2V0h2v24zM22 3l-4 1c-3 0-3-3-7-3L6 3v12l5-2c4 0 4 3 7 3l4-1V3z" />
      </svg>
    );
  }
}

export default Flag;
