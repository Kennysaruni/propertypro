import React, { useEffect, useState } from "react";
import './TenantsList.css'

function TenantsList() {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tenants")
      .then((res) => res.json())
      .then((promise) => setTenants(promise));
  });
  return (
    <div className="tenantslist">
      <h1 className="tenants-title">Tenants</h1>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Tenant</th>
              <th>Unit</th>
              <th>Lease</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map((tenant) => {
              return (
                <tr>
                  <td>{tenant.name}</td>
                  <td>{tenant.unit_number}</td>
                  <td>
                    <div className="lease-expiry">Expires {tenant.lease_expiry_date}</div>
                  </td>
                  <td>{tenant.contact}</td>
                  <td className="view-profile">
                    View profile
                  </td>
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
