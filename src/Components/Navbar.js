import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
      <div className="ui inverted vertical center segment">
        <div class="ui container">
          <div class="ui large secondary inverted pointing menu">
            <Link class="active item" to="/">Home</Link>
            <Link class="item" to="/blog">Blog</Link>
          </div>
        </div>
      </div>

  )
}

export default Navbar
