import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Listings from "./components/Listings/Listings";
import "./App.css";
import Owner from "./pages/Onwer/Owner";
import Tenant from "./pages/Tenant/Tenant";
import Apartment from "./components/Apartment/Apartment";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Properties from "./components/Properties/Properties";
import TenantsList from "./components/TenantsList/TenantsList";
import Maintenance from "./components/Maintenance/Maintenance";
import TenantDashboard from "./components/TenantDashboard/TenantDashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OwnerDashboard from "./components/OwnerDashboard/OwnerDashboard";
import Lease from "./components/Lease/Lease";
import Login from "./components/Login/Login";
import { getJSONPayloadFromJwt, getJwtToken } from "./utilities/auth";

function App() {
  const [user,setUser] = useState(null)

  function syncUserState(){
    const userParams = getJSONPayloadFromJwt(getJwtToken())
    if ('owner_id' in userParams || 'tenant_id' in userParams){
      setUser(userParams)
    }
    else{
      setUser(null)
    }
  }

  useEffect(syncUserState,[])
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} setUser={setUser} />
        {/* <Lease/> */}
        {/* <TenantDashboard/> */}
        <Login/>
        <Routes>
          <Route path="/tenant" element={<TenantDashboard />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<OwnerDashboard />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<TenantsList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
