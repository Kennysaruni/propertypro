import React, { useEffect, useState } from "react";
import "./Listings.css";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  console.log(listings);

  return (
    <div className="listings-container">
      <h1>Property Listings</h1>
      <div className="active-listings">Active Listings</div>
      <div className="listings">
        {listings.map((listing) => {
          return (
            <div className="eachlisting">
              <img src={listing.image} alt={listing.name} className="" />
              <p className="name">{listing.name}</p>
              <p className="location">{listing.location}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Listings;
