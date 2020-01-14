import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import App from './components/App';
import Header from './components/Header';

import './theme/main.scss';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/header" component={Header} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
