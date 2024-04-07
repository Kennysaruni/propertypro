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
        <div className='items'>Lease
        
        </div>
        <div className='items'>Maintenance
        </div>
        <div className='items'>Tenants
        </div>
        <div className='items'>Settings
        </div>
    </div>
</div>
  )
}

export default Sidemenu