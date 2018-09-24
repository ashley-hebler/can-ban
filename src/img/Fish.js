import React from 'react';

class Fish extends React.Component {
  render() {
    return (
      <svg
        className={this.props.marker}
        xmlns="http://www.w3.org/2000/svg"
        version="1"
        viewBox="-342 266 92 56"
      >
        <path d="M-284 319l-5-1-6-1-6 1-5 1-5-1-6-1-6 1-5 1v3l6-1 5-1 5 1 6 1 6-1 5-1 5 1 6 1v-3zm33-44l-10-3-4-5-1-1c-6 2-15 8-13 17h-5l-1 2 1 1s5 3 5 9l1 1c1 0 4-1 5-5l5 1 2 4h3c2-1 2-3 3-5l2-1c7-4 8-13 8-14l-1-1zm-15-6l1 3-4 1c-4 2-6 6-7 9-1-7 7-11 10-13zm-11 23c0-3-2-5-3-6h3v2l1 1-1 3zm13 1h-1v-1h1v1zm5-5c-4 2-9 2-15-1 0-3 2-9 7-11 3-2 8-2 14 1 0 2-2 8-6 11z" />
        <path d="M-259 285l1 1 1-1-1-3c-3-2-2-5-2-5 0-1-1-2-2-1h-1s-1 5 4 9z" />
        <ellipse cx="-257" cy="278" rx="1" ry="1" />
        <path d="M-310 304l2 1v-2c3-7 7-13 13-18l-2-2h-1c-5 6-10 12-13 19l1 2zm20-25h1l4-3-2-2-4 2-1 2 2 1zm14 23c-11 1-22 5-31 13v2h2c9-7 19-11 30-12v-3h-1zm17 1l-9-1-2 1 2 2 8 1c1 0 2-1 1-2v-1zm-66 8l1 3c1 1 2-1 3-2l-1-2c-2-5-6-5-9-5l-1 2 2 1s4-1 5 3zm-14 2l-2 1c-1 1 0 2 1 3l2-1s2-1 3 1l3-1v-1c-3-3-7-2-7-2z" />
      </svg>
    );
  }
}

export default Fish;
