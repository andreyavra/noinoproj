import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';



import Home from '../pages/Home';
import About from '../pages/About';
import Christmas from '../pages/Christmas';
import Bucc from '../pages/Bucc';
import Article from '../pages/Article';


class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <About {...props} />
            )}
          />
          <Route
            exact
            path="/christmas"
            render={props => (
              <Christmas {...props} />
            )}
          />
          <Route
            exact
            path="/bucc"
            render={props => (
              <Bucc {...props} />
            )}
          />
          <Route 
            exact
            path="/articles/:name" // /articles/andrey
            render={props => (
              <Article {...props} />
            )}
          />
        />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
