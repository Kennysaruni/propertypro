import React from 'react'
import TenantDashboard from '../../components/TenantDashboard/TenantDashboard'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import './Tenant.css'

function Tenant() {
  return (
    <div>
        <div className="tenant-dashboard">
        <div className="sidemenu-container">
          <Sidemenu />
        </div>
        <div>
          <TenantDashboard/>
        </div>
      </div>
    </div>
  )
}

export default Tenant