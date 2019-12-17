import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar.js'
import React from 'react'
import SpaceX from '../components/SpaceX'
import Test from '../components/TestComponent'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={SpaceX} path='/spacex' />
        <Route component={Test} path='/test' />
      </Switch>
    </Router>
  )
}

export default App
