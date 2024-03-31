import React from 'react'
import TenantDashboard from '../../components/TenantDashboard/TenantDashboard'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import './Tenant.css'
import Apartment from '../../components/Apartment/Apartment'

function Tenant() {
  return (
    <div>
        <div className="tenant-dashboard">
        <div className="sidemenu-container">
          <Sidemenu />
        </div>
        <div>
          {/* <TenantDashboard/> */}
          <Apartment/>
        </div>
      </div>
    </div>
  )
}

export default Tenant