import React, { useEffect, useState } from "react";
import "./OwnerDashboard.css";
import rentgraph from "../../assets/Rent.png";
import occupancygraph from "../../assets/Occupancy.svg";
import { getJwtToken } from "../../utilities/auth";

function OwnerDashboard({ user }) {
  const [maintenances, setMaintenances] = useState([]);
  const [profile, setProfile] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/profile',{
      'method': 'GET',
      'headers' : {
        'Authorization' : `Bearer ${getJwtToken()}`,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => setProfile(data.owner))
    .catch(error => console.error('Error fetching profile', error))
  },[])


  
  useEffect(() => {
    fetch("http://localhost:3000/requests",{
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getJwtToken()}`,
        'Content-Type': 'application/json' 
      }
    })
      .then((response) => response.json())
      .then((data) => setMaintenances(data));
  }, []);

  return (
    <div className="dash-container">
      {/* <h1 className='performance-number'>Dashboard</h1> */}
      <p className="welcome"> Welcome back, {profile.username} </p>
      <div className="performance-container">
        <div className="active-listings">Property Performance</div>
        <div className="performance">
          <div className="performance-items">
            <p className="performance-text"> Rent Collected</p>
            <h1 className="performance-number">$1500</h1>
            {/* <img src={rentgraph} alt="rentgraph" className="" /> */}
          </div>
          <div className="performance-items">
            <p className="performance-text"> Occupancy</p>
            <h1 className="performance-number">92%</h1>
            {/* <img src={occupancygraph} alt="Occupancy" className="" /> */}
          </div>
          <div className="performance-items">
            <p className="performance-text"> Tenants</p>
            <h1 className="performance-number">134</h1>
            {/* <img src={occupancygraph} alt="Occupancy" className="" /> */}
          </div>
          <div className="performance-items">
            <p className="performance-text">Apartments</p>
            <h1 className="performance-number">200</h1>
            {/* <img src={occupancygraph} alt="Occupancy" className="" /> */}
          </div>
        </div>
        <div className="recent-events">
          <p className="active-listings">Recent events</p>
          <ul class="bar">
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
                const unit = maintenance.unit
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
