import React from 'react'
import OwnerDashboard from '../../components/OwnerDashboard/OwnerDashboard'
import Sidemenu from '../../components/Sidemenu/Sidemenu'
import './Tenant.css'
import Apartment from '../../components/Apartment/Apartment'
import Maintenance from '../../components/Maintenance/Maintenance'

function Tenant() {
  return (
    <div>
        <div className="tenant-dashboard">
        <div className="sidemenu-container">
          <Sidemenu />
        </div>
        <div>
          {/* <OwnerDashboard/> */}
          {/* <Apartment/> */}
          <Maintenance/>
        </div>
      </div>
    </div>
  )
}

export default Tenant