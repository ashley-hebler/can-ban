import React, { Component } from "react";
import Hero from "./components/Hero";

// Animation
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Views
import Home from "./views/Home";
import River from "./views/River";
import About from "./views/About";

// Components
import SiteFooter from "./components/SiteFooter";
import "./App.css";
import Helmet from "react-helmet";

// Helpers
import { slugify } from "./helpers";

// Tracking
import ReactGA from "react-ga";
ReactGA.initialize("UA-119991646-1");

class App extends Component {
  state = {
    cities: [
      {
        name: "New Braunfels, TX",
        icon: "fish",
        rivers: "Guadalupe/Comal",
        status: "Can ban in city limits*",
        color: "caution",
        plural: true,
        canBan: true,
        file: "nb",
        markup: ""
      },
      {
        name: "San Marcos, TX",
        icon: "falls",
        rivers: "San Marcos",
        status: "No can ban",
        color: "success",
        plural: false,
        canBan: false,
        file: "nb",
        markup: ""
      },
      {
        name: "Concan, TX",
        icon: "water",
        rivers: "Frio",
        status: "No can ban",
        color: "success",
        plural: false,
        canBan: false,
        file: "nb",
        markup: ""
      },
      {
        name: "Bandera, TX",
        icon: "boat",
        rivers: "Medina",
        status: "No can ban",
        color: "success",
        plural: false,
        canBan: false,
        file: "nb",
        markup: ""
      }
    ],
    last: "none",
    hero1: {
      main: "Is there a can ban?",
      icons: true,
      index: 1
    },
    hero2: {
      main: "Is littering banned?",
      icons: false,
      index: 2,
      content: ""
    },
    littering: "",
    testTest: []
  };
  getCompText = text => {
    let textFile = require(`./text/${text}.md`);
    fetch(textFile)
      .then(response => response.text())
      .then(content => {
        this.setState({ [text]: content });
        return;
      });
  };
  setText = text => {
    let textFile = require(`./text/${text}.md`);
    fetch(textFile)
      .then(response => response.text())
      .then(content => {
        // let newelement = obj;
        // newelement.markup = content;
        // this.setState(prevState => ({
        //   cities: [...prevState.cities, newelement]
        // }));
        return content;
      });
  };
  setRiver = name => {
    this.setState({
      last: name
    });
  };
  getRiver = (slug, showSlug) => {
    showSlug = typeof showSlug !== "undefined" ? showSlug : false;
    var current = {};
    slug = slug.replace("/", "");
    if (slug.length < 1) {
      slug = "home";
    }
    if (showSlug) {
      return slug;
    }
    Object.keys(this.state.cities).filter(key => {
      let item = slugify(this.state.cities[key].name);
      if (item === slug) {
        current = this.state.cities[key];
        current.slug = slug;
      }
    });
    return current;
  };
  updateText = () => {
    let arr = [];
    let cities = this.state.cities;
    Object.keys(cities).filter(key => {
      // cities[key].text = this.setText(cities[key].file);
      // console.log(vm.setText(cities[key].file));
      // let textFile = require(`./text/${cities[key].file}.md`);
      // fetch(textFile)
      //   .then(response => response.text())
      //   .then(content => {
      //     cities[key].text = content;
      //     // arr.push(cities[key]);
      //   });
      arr.push(cities[key]);
    });
    console.log(arr);
    this.setState(prevState => ({
      cities: arr
    }));
  };
  componentDidMount() {
    this.getCompText("littering");
    this.updateText();
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Route
            render={({ location }) => (
              <div className="site-wrap">
                <Helmet title="Is there a can ban? | 2018" />
                <Link to="/">
                  <Hero heroData={this.state.hero1} />
                </Link>
                <main
                  className={`${this.getRiver(
                    location.pathname,
                    true
                  )} site-wrap__main`}
                >
                  <TransitionGroup>
                    <CSSTransition
                      key={location.key}
                      classNames="fade"
                      timeout={0}
                    >
                      <Switch location={location}>
                        <Route
                          exact
                          path="/"
                          render={props => (
                            <Home
                              {...props}
                              heroData={this.state.hero2}
                              cities={this.state.cities}
                              source={this.state.littering}
                              last={this.state.last}
                            />
                          )}
                        />
                        <Route
                          exact
                          path="/about"
                          render={props => <About />}
                        />
                        <Route
                          exact
                          path="/:id"
                          render={(props, match) => (
                            <River
                              {...props}
                              currentRiver={this.getRiver(location.pathname)}
                              setRiver={this.setRiver}
                            />
                          )}
                        />
                        <Route path="/:id" component={River} />
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </main>
                <SiteFooter />
              </div>
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
