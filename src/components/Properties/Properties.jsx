import React, { useEffect, useState } from "react";
import "./Properties.css";

function Properties() {
  const [maintenances, setMaintenances] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/maintenance")
      .then((response) => response.json())
      .then((data) => setMaintenances(data));
  },[]);

  return (
    <div className="properties-container">
      <h1 className="all-properties"> All properties</h1>
      <div className="filter-dropdowns">
        <select name="property-type" className="property-type">
          <option value="" disabled selected>
            Property type
          </option>
          <option value="">Apartment</option>
          <option value="">House</option>
          <option value="">Bungalow</option>
        </select>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Property</th>
              <th>Status</th>
              <th>Unit count</th>
              <th>Lease count</th>
              <th>Balance</th>
            </tr>
          </thead>
          <tbody>
            {maintenances.map((maintenance) => {
              return (
                <tr>
                  <td>{maintenance.unit}</td>
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
  );
}

export default Properties;
