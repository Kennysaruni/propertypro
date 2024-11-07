import React, { useEffect, useState } from "react";
import "./OwnerDashboard.css";
import { getJwtToken } from "../../utilities/auth";

function OwnerDashboard() {
  const [maintenances, setMaintenances] = useState([]);
  const [profile, setProfile] = useState({});
  const [tenantCount, setTenantCount] = useState(0);
  const [occupancyPercentage, setOccupancyPercentage] = useState(0);
  const [totalRentCollected, setTotalRentCollected] = useState(0);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getJwtToken()}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setProfile(data.owner);

        // Calculate tenant count and occupancy
        const propertyId = 1; // Assuming property ID is 1, you can adjust as needed
        const leasesForProperty = data.owner.leases.filter(lease => lease.property_id === propertyId);
        const uniqueTenants = new Set(leasesForProperty.map(lease => lease.tenant_id));
        setTenantCount(uniqueTenants.size);

        const totalUnits = data.owner.units.length;
        const leasedUnits = new Set(leasesForProperty.map(lease => lease.unit_id)).size;
        const occupancy = (leasedUnits / totalUnits) * 100;
        setOccupancyPercentage(occupancy);

        // Calculate total rent collected
        let rentCollected = 0;
        leasesForProperty.forEach(lease => {
          const leasedUnit = data.owner.units.find(unit => unit.id === lease.unit_id);
          if (leasedUnit) {
            rentCollected += parseFloat(leasedUnit.rent_amount);
          }
        });
        setTotalRentCollected(rentCollected);
      } catch (error) {
        console.error('Error fetching profile', error);
      }
    };
    fetchProfile();
  }, []);

  // Fetch maintenance requests
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:3000/requests", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getJwtToken()}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setMaintenances(data);
      } catch (error) {
        console.error('Error fetching maintenance requests', error);
      }
    };
    fetchRequests();
  }, []);

  if(!user){
    return ("You are not logged in")
  }

  return (
    <div className="dash-container">
      <p className="welcome"> Welcome back, {profile.username} </p>
      <div className="performance-container">
        <div className="active-listings">Property Performance</div>
        <div className="performance">
          <div className="performance-items">
            <p className="performance-text"> Rent Collected</p>
            <h1 className="performance-number">KES {totalRentCollected}</h1>
          </div>
          <div className="performance-items">
            <p className="performance-text"> Occupancy</p>
            <h1 className="performance-number">{occupancyPercentage.toFixed(2)}%</h1>
          </div>
          <div className="performance-items">
            <p className="performance-text"> Tenants</p>
            <h1 className="performance-number">{tenantCount}</h1>
          </div>
          <div className="performance-items">
            <p className="performance-text">Apartments</p>
            <h1 className="performance-number">{profile.units ? profile.units.length : 0}</h1>
          </div>
        </div>
        <div className="recent-events">
          <p className="active-listings">Recent events</p>
          <ul className="bar">
            <li>Lease for Apartment 208 has been renewed</li>
            <li>John has paid his rent before the due date</li>
            <li>Maintenance request for unit 101 is complete</li>
            <li>Lynne has been added as a tenant for unit 302</li>
            <li>Lynne has filed a request [Shower head not functioning]</li>
          </ul>
        </div>
        <div className="active-listings">Maintenance Requests</div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Unit</th>
                <th>Description</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {maintenances.map((maintenance) => {
                const unit = maintenance.unit;
                return (
                  <tr key={maintenance.id}>
                    <td>{unit.id}</td>
                    <td>{maintenance.description}</td>
                    <td>
                      <div className="status">{maintenance.priority}</div>
                    </td>
                    <td>
                      <div className="status">{maintenance.status}</div>
                    </td>
                    <td>{maintenance.duedate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboard;
