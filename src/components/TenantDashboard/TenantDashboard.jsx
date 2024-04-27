import React from "react";
import "./TenantDashboard.css";

function TenantDashboard() {
  return (
    <div className="dashboard-container">
      <p className="welcome-message">Welcome back, Anna</p>
      <div className="overview">
        <div className="overview-items">
          <h1 className="overview-amount">Ksh 4500</h1>
          <p className="overview-text">Rent balance</p>
        </div>
        <div className="overview-items">
          <h1 className="overview-amount">Ksh 4500</h1>
          <p className="overview-text">Total due</p>
        </div>
        <div className="overview-items">
          <h1 className="overview-amount">1</h1>
          <p className="overview-text">Overdue payments</p>
        </div>
        <div className="overview-items">
          <h1 className="overview-amount">2</h1>
          <p className="overview-text">Active maintenance requests</p>
        </div>
      </div>
      <div className="recent-events-container">
        <h2>Recent events</h2>
        <ul class="bar">
            <li>Lease for Apartment 208 has been renewed</li>
            <li>John has paid his rent before the due date</li>
            <li>Maintenance request for unit 101 is complete</li>
            <li>Lynne has been added as a tenant for unit 302</li>
            <li>Lynne has filed a request [Shower head not functioning]</li>
          </ul>
      </div>
    </div>
  );
}

export default TenantDashboard;
