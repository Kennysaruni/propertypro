import React from 'react'
import './Sidemenu.css'

function Sidemenu() {
  return (
    <div className='container'>
    <div className="items-container">
        <div className='items'>Dashboard</div>
        <div className='items'>Lease</div>
        <div className='items'>Maintenance</div>
        <div className='items'>Reports</div>
        <div className='items'>Settings</div>
    </div>
</div>
  )
}

export default Sidemenu