import React, { useEffect, useState } from "react";
import "./Apartment.css";
import ImageSlider from "../ImageSlider/ImageSlider";
import documentLogo from "../../assets/icons8-document.svg";

function Apartment() {
  const [clickedTab, setClickedTab] = useState(0); // Initialize with index 0 for Overview
  const [images, setImages] = useState([]);

  const handleTabClick = (tabIndex) => {
    setClickedTab(tabIndex);
  };

  useEffect(() => {
    fetch("http://localhost:3000/listings")
      .then((res) => res.json())
      .then((data) => setImages(data[0].images));
  }, []);

  console.log(images);
  const userImage =
    "https://images.unsplash.com/photo-1687319000074-90e2048df2f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpc3BsYXklMjBwcm9maWxlfGVufDB8fDB8fHww";

  return (
    <div className="apt-container">
      <div className="name-container">
        <h2 className="apt-name">Cozy Loft, San Francisco, CA</h2>
        {/* <button className="viewlease">View lease</button> */}
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
        <ImageSlider />
        <div className="tenant-container">
          <p className="details-title">Tenant Details</p>
          <div className="tenants-details">
            <img
              src={userImage}
              alt="user-image"
              className="rounded-full w-[55px] h-[55px]"
            />
            <div className="name-email">
              <p className="name">Kenny Latimore</p>
              <p className="email-number">
                kennylatimore@gmail.com, +(254) 703546026
              </p>
            </div>
          </div>
        </div>
        <div className="financials">
          <p className="details-title">Financial Summary</p>
          <div className="financials-container">
            <div className="finance">
              <p className="rent-text">Rent balance</p>
              <h1 className="amount">Ksh 22,000</h1>
            </div>
            <div className="finance">
              <p className="rent-text">Prepaid balance</p>
              <h1 className="amount">Ksh 0</h1>
            </div>
            <div className="finance">
              <p className="rent-text">Security deposit</p>
              <h1 className="amount">Ksh 10,000</h1>
            </div>
          </div>
        </div>
        <div className="documents">
          <p className="details-title">Documents</p>
          <div className="documents-access">
            <div className="document">
              <img
                src={documentLogo}
                alt="document-logo"
                className="w-[50px] h-[50px] rounded-2xl py-3.5 bg-black/20"
                style={{ backgroundColor: "#DBE5E0" }}
              />
              <div className="lease-container">
                <p className="name">June 30,2022 - June 30,2023</p>
                <p className="email-number">Lease agreement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apartment;
