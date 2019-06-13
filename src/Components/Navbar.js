import { Link } from 'react-router-dom'
import React from 'react'
function Navbar() {
  return (
    <div className='ui inverted vertical center segment'>
      <div className='ui container'>
        <div className='ui large secondary inverted pointing menu'>
          <Link class='active item' to='/'>Home</Link>
          <Link class='item' to='/blog'>Blog</Link>
        </div>
      </div>
    </div>

  )
}

export default Navbar
