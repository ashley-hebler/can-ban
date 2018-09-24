import React, { Component } from 'react';
import Hero from './components/Hero';

// Animation
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from 'react-router-dom';

// Views
import Home from './views/Home';
import River from './views/River';
import About from './views/About';

// Components
import SiteFooter from './components/SiteFooter';
import './App.css';
import ScrollToTop from './utils/ScrollToTop';

// Helpers
import { slugify } from './helpers';

// Tracking
import withAnalytics from './utils/analytics';

class App extends Component {
  state = {
    cities: [
      {
        name: 'New Braunfels, TX',
        icon: 'fish',
        rivers: 'Comal',
        status: 'Banned',
        color: 'danger',
        plural: true,
        canBan: true,
        file: 'nb',
        markup: ''
      },
      {
        name: 'New Braunfels, TX',
        icon: 'fish',
        rivers: 'Guadalupe',
        status: 'Banned*',
        color: 'caution',
        plural: true,
        canBan: true,
        file: 'nb',
        markup: ''
      },
      {
        name: 'San Marcos, TX',
        icon: 'falls',
        rivers: 'San Marcos',
        status: 'Allowed',
        color: 'success',
        plural: false,
        canBan: false,
        file: 'nb',
        markup: ''
      },
      {
        name: 'Concan, TX',
        icon: 'water',
        rivers: 'Frio',
        status: 'Allowed',
        color: 'success',
        plural: false,
        canBan: false,
        file: 'nb',
        markup: ''
      },
      {
        name: 'Bandera, TX',
        icon: 'boat',
        rivers: 'Medina',
        status: 'Allowed',
        color: 'success',
        plural: false,
        canBan: false,
        file: 'nb',
        markup: ''
      }
    ],
    last: 'none',
    hero1: {
      main: 'Is there a can ban?',
      icons: true,
      index: 1
    },
    hero2: {
      main: 'About this site',
      icons: false,
      index: 2,
      content: ''
    },
    littering: '',
    testTest: [],
    svgs: ''
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
  getSVGs = () => {
    let componentFile = require(`./img/icon-sprite.svg`);
    fetch(componentFile)
      .then(response => response.text())
      .then(text => {
        this.setState({
          svgs: text
        });
        return;
      });
  };
  setText = text => {
    let textFile = require(`./text/${text}.md`);
    fetch(textFile)
      .then(response => response.text())
      .then(content => {
        return content;
      });
  };
  setRiver = name => {
    this.setState({
      last: name
    });
  };
  getRiver = (slug, showSlug) => {
    showSlug = typeof showSlug !== 'undefined' ? showSlug : false;
    var current = {};
    slug = slug.replace('/', '');
    if (slug.length < 1) {
      slug = 'home';
    }
    if (showSlug) {
      return slug;
    }
    Object.keys(this.state.cities).filter(key => {
      let item = slugify(this.state.cities[key].rivers);
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
      arr.push(cities[key]);
    });
    console.log(arr);
    this.setState(prevState => ({
      cities: arr
    }));
  };
  componentDidMount() {
    this.getCompText('littering');
    this.updateText();
    this.getSVGs();
  }
  render() {
    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <ScrollToTop>
              <div className="site-wrap">
                <span
                  className="hidden"
                  dangerouslySetInnerHTML={{ __html: this.state.svgs }}
                />
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
                        <Route exact path="/about" component={About} />
                        <Route
                          exact
                          path="/:id"
                          render={props => (
                            <River
                              {...props}
                              currentRiver={this.getRiver(location.pathname)}
                              setRiver={this.setRiver}
                            />
                          )}
                        />
                        <Route render={() => <div>Not Found</div>} />
                      </Switch>
                    </CSSTransition>
                  </TransitionGroup>
                </main>
                <SiteFooter />
              </div>
            </ScrollToTop>
          )}
        />
      </div>
    );
  }
}

export default withRouter(withAnalytics(App));
