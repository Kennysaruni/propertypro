import React, { useEffect, useState } from "react";
import "./Maintenance.css";
import searchlogo from "../../assets/icons8-search.svg";
import plus from "../../assets/icons8-plus.svg";
import wrench from "../../assets/wrench.svg";

function Maintenance() {
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/maintenance")
      .then((res) => res.json())
      .then((data) => setMaintenance(data));
  }, []);

  console.log(maintenance)

  const newRequests = maintenance.filter(
    (request) => request.status === "Open"
  );
  const inProgressRequests = maintenance.filter(
    (request) => request.status === "In progress"
  );
  const completedRequests = maintenance.filter(
    (request) => (request.filter = "Closed")
  );

  function handleComplete(id) {
    // Make a PUT request to update the status of the request to "Closed"
    fetch(`http://localhost:3000/maintenance/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "Closed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // Update the maintenance state with the updated request
        const updatedMaintenance = maintenance.map((item) =>
          item.id === id ? { ...item, status: "Closed" } : item
        );
        setMaintenance(updatedMaintenance);
      })
      .catch((error) => console.error("Error:", error));
  }
  return (
    <div className="container">
      <h1 className="maintenance">Maintenance</h1>
      <div className="search-input">
        <img
          src={searchlogo}
          alt="search-logo"
          className="py-3.5 h-[50px] w-[50px] bg-transparent absolute"
          style={{ color: "#DBE5E0", fill: "#4F9661" }}
        />
        <input
          type="text"
          className="search"
          placeholder="Search maintenance request"
        />
      </div>
      <div className="progress">
        <p className="request-status">New Request</p>
        {newRequests &&
          newRequests.map((request) => {
            return (
              <div className="request">
                <img
                  src={plus}
                  alt="document-logo"
                  className="w-[50px] h-[50px] rounded-2xl py-3.5 bg-black/20"
                  style={{ backgroundColor: "#DBE5E0" }}
                />
                <div className="requestname">
                  <p className="name">{request.description}</p>
                  <p className="unit-no">Unit {request.unit}</p>
                </div>
                <div className="request-actions">
                  <button className="complete-request" >Start</button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="progress">
        <p className="request-status">In progress</p>
        {inProgressRequests &&
          inProgressRequests.map((request) => {
            return (
              <div className="request">
                  <img
                    src={wrench}
                    alt="document-logo"
                    className="w-[50px] h-[50px] rounded-2xl py-3.5 bg-black/20"
                    style={{ backgroundColor: "#DBE5E0" }}
                  />
                <div className="requestname">
                  <p className="name">{request.description}</p>
                  <p className="unit-no">Unit {request.unit}</p>
                </div>
                <div className="request-actions">
                  <button className="complete-request" onClick={handleComplete(request.id)}>Complete</button>
                </div>
              </div>
            );
          })}
      </div>
      <div className="progress">
        <p className="request-status">Completed</p>
        {completedRequests &&
          completedRequests.map((request) => {
            return (
              <div className="request">
                <img
                  src={wrench}
                  alt="document-logo"
                  className="w-[50px] h-[50px] rounded-2xl py-3.5 bg-black/20"
                  style={{ backgroundColor: "#DBE5E0" }}
                />
                <div className="requestname">
                  <p className="name">{request.description}</p>
                  <p className="unit-no">Unit {request.unit}</p>
                </div>
                <p className="completion-status">3 days ago</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Maintenance;
