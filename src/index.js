import React from 'react';
import { render } from 'react-snapshot';
import App from './App';
import WebFont from 'webfontloader';
render(
  <App />,
  document.getElementById('root')
);



WebFont.load({
  google: {
    families: ['Noto+Sans:400,700', 'sans-serif']
  }
});