import React, { useState } from "react";
import "./Apartment.css";

function Apartment() {
    const [clickedTab, setClickedTab] = useState(0); // Initialize with index 0 for Overview

    const handleTabClick = (tabIndex) => {
        setClickedTab(tabIndex);
    };

    return (
        <div className="apt-container">
            <div className="name-container">
                <h2 className="apt-name">Cozy Loft, San Francisco, CA</h2>
                <button className="viewlease">View lease</button>
            </div>
            <div className="tabs">
                <div className={clickedTab === 0 ? 'clicked-tab' : 'tab'} onClick={() => handleTabClick(0)}>Overview</div>
                <div className={clickedTab === 1 ? 'clicked-tab' : 'tab'} onClick={() => handleTabClick(1)}>Documents</div>
                <div className={clickedTab === 2 ? 'clicked-tab' : 'tab'} onClick={() => handleTabClick(2)}>Payments</div>
                <div className={clickedTab === 3 ? 'clicked-tab' : 'tab'} onClick={() => handleTabClick(3)}>Transactions</div>
            </div>
        </div>
    );
}

export default Apartment;


