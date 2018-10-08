import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import History from './History';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink exact to="/" activeClassName="selected"> Home </NavLink>
          <NavLink to="/notre-histoire" activeClassName="selected"> History </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/notre-histoire" component={History} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
