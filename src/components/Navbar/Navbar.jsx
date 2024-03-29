import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
        <h2 className="logo">PropertyPro</h2>
    <div className="nav-items">
      <div className='nav-item'>
        {/* <Link to='/'>Home</Link> */}
        <a href="/">Home</a>
        </div>
      <div className='nav-item'>
      {/* <Link to='/notfound'>Resources</Link> */}
      <a href="/">Resources</a>
        </div>
      <div className='nav-item'>
      {/* <Link to='/links'>Links</Link> */}
      <a href="/">Houses</a>
        </div>
        <div className="login">
          <button className="sign-in">Sign in</button>
          <button className="get-started">Get Started</button>
        </div>
    </div>
</div>
  )
}

export default Navbar