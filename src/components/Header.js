import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='container-fluid'>
       <Link to='/' style={{ textDecoration: 'none' }}>
      <h5 className='navbar'>BRANDROOT</h5>
      </Link>
      <Link to='/logout'>
      <button type="button" class="btn-log btn-sm"> Log Out</button>
      </Link>
    </div>
  )
}

export default Header
