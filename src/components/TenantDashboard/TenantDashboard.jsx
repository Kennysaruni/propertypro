import React from 'react'
import './TenantDashboard.css'

function TenantDashboard() {
  return (
    <div className='dashboard-container'>
        <h1 className="dashboard">Dashboard</h1>
        <p className="welcome-message">Welcome back, Anna</p>
        <div className="overview">
            <div className="overview-items"></div>
            <div className="overview-items"></div>
            <div className="overview-items"></div>
            <div className="overview-items"></div>
        </div>
    </div>
  )
}

export default TenantDashboard