import React, { useEffect, useState } from "react";
import './TenantsList.css';
import { getJwtToken } from "../../utilities/auth";

function TenantsList() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    const fetchLeases = async () => {
      try {
        const response = await fetch("http://localhost:3000/leases", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getJwtToken()}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setLeases(data); // Set the leases data directly
      } catch (error) {
        console.error('Error fetching leases', error);
      }
    };

    fetchLeases();
  }, []);

  return (
    <div className="tenantslist">
      <h1 className="tenants-title">Tenants</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Unit Type</th>
              <th>Rent Amount</th>
              <th>Property</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {leases.map((lease) => {
              const tenant = lease.tenant;
              const unit = lease.unit;
              const property = lease.property;
              
              return (
                <tr key={lease.id}>
                  <td>{tenant.username}</td>
                  <td>{unit.unit_type}</td>
                  <td>{unit.rent_amount}</td>
                  <td>{property.property_name}</td>
                  <td>{tenant.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TenantsList;

