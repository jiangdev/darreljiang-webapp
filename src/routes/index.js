import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom'
import Home from '../components/Home/index.js'

import Navbar from '../components/Navbar.js'
import React from 'react'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' />
      </Switch>
    </Router>
  )
}

export default App
