import {
  Route, BrowserRouter as Router, Switch,
} from 'react-router-dom'
import Blog from './Blog'
import Home from './Home'
import Navbar from './Navbar'
import React from 'react'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Blog} path='/blog' />
      </Switch>
    </Router>
  )
}

export default App
