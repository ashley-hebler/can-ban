import React from "react";
import { render } from "react-snapshot";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import WebFont from "webfontloader";
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

WebFont.load({
  google: {
    families: ["Noto+Sans:400,700", "sans-serif"]
  }
});
