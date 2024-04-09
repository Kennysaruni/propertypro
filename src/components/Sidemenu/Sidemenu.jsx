import React from 'react'
import './Sidemenu.css'
import home from '../../assets/icons8-home.svg'
import { Link } from 'react-router-dom'

function Sidemenu() {
  return (
    <div className='container'>
    <div className="items-container">
        <div className='items'>Overview
        <Link to='/dashboard'>Overview</Link>
        </div>
        <div className='items'>Listings
        <Link to='/listings'>Listings</Link>
        </div>
        <div className='items'>Maintenance
        <Link to='/maintenance'>Maintenance</Link>
        </div>
        <div className='items'>Tenants
        <Link to='/tenants'>Tenants</Link>
        </div>
        <div className='items'>
        <Link to='/properties'>Properties</Link>
        </div>
    </div>
</div>
  )
}

export default Sidemenu