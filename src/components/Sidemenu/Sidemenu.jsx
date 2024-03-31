import React from 'react'
import './Sidemenu.css'
import home from '../../assets/icons8-home.svg'

function Sidemenu() {
  return (
    <div className='container'>
    <div className="items-container">
        <div className='items'>Overview</div>
        <div className='items'>Lease</div>
        <div className='items'>Maintenance</div>
        <div className='items'>Tenants</div>
        <div className='items'>Settings</div>
    </div>
</div>
  )
}

export default Sidemenu