import React, { useEffect, useState } from "react";
import "./Apartment.css";

function Apartment() {
  const [clickedTab, setClickedTab] = useState(0); // Initialize with index 0 for Overview
  const [images,setImages] = useState([])

  const handleTabClick = (tabIndex) => {
    setClickedTab(tabIndex);
  };

useEffect (() => {
    fetch('http://localhost:3000/listings')
    .then ((res) => res.json())
    .then(data => setImages(data[0].images))
},[])

console.log(images)

  return (
    <div className="apt-container">
      <div className="name-container">
        <h2 className="apt-name">Cozy Loft, San Francisco, CA</h2>
        <button className="viewlease">View lease</button>
      </div>
      <div className="tabs">
        <div
          className={clickedTab === 0 ? "clicked-tab" : "tab"}
          onClick={() => handleTabClick(0)}
        >
          Overview
        </div>
        <div
          className={clickedTab === 1 ? "clicked-tab" : "tab"}
          onClick={() => handleTabClick(1)}
        >
          Documents
        </div>
        <div
          className={clickedTab === 2 ? "clicked-tab" : "tab"}
          onClick={() => handleTabClick(2)}
        >
          Payments
        </div>
        <div
          className={clickedTab === 3 ? "clicked-tab" : "tab"}
          onClick={() => handleTabClick(3)}
        >
          Transactions
        </div>
      </div>
      <div className="all-details">
        <p className="details-title">Property Details</p>
        <div className="details-container">
          <div className="details">
            Type
            <p>Apartment</p>
          </div>
          <div className="details">
            Bedrooms
            <p>2</p>
          </div>
          <div className="details">
            Baths
            <p>2</p>
          </div>
          <div className="details">
            Sq Feet
            <p>4400</p>
          </div>
          <div className="details">
            Lease start
            <p>1/1/2024</p>
          </div>
          <div className="details">
            Lease End
            <p>1/6/2024</p>
          </div>
          <div className="details">
            Rent
            <p>Ksh 22000 /month</p>
          </div>
        </div>
        <div style={{backgroundImage : `url()`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      </div>
    </div>
  );
}

export default Apartment;
