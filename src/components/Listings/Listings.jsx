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

  const listing = {
    name: "Cozy Downtown ",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50fGVufDB8fDB8fHww",
  };

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
