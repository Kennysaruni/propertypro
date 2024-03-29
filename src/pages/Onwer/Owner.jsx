import React from "react";
import "./Owner.css";
import Sidemenu from "../../components/Sidemenu/Sidemenu";
import Listings from "../../components/Listings/Listings";

function Owner() {
  return (
    <div>
      <div className="a-listings">
        <div className="sidemenu-container">
          <Sidemenu />
        </div>
        <div>
          <Listings />
        </div>
      </div>
    </div>
  );
}

export default Owner;
