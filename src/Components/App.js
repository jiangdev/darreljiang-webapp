import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './Home'
import Blog from './Blog'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </Router>
  )
}

export default App;

