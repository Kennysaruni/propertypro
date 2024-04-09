import React from "react";
import "./Owner.css";
import Sidemenu from "../../components/Sidemenu/Sidemenu";
import Listings from "../../components/Listings/Listings";
import { BrowserRouter,Route } from "react-router-dom";
import OwnerDashboard from "../../components/OwnerDashboard/OwnerDashboard";
import Maintenance from "../../components/Maintenance/Maintenance";
import Properties from "../../components/Properties/Properties";

function Owner() {
  return (
    <BrowserRouter>
      <div>
        <div className="a-listings">
          <div className="sidemenu-container">
            <Sidemenu />
          </div>
          <div>
            <Route path='/owner-dashboard' element={<OwnerDashboard/>}/>
            <Route path='/listings' element={<Listings/>}/>
            <Route path='/maintenance' element={<Maintenance/>}/>
            {/* <Route path='/tenants' element={<Tenants/>}/> */}
            <Route path='/properties' element={<Properties/>}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Owner;
