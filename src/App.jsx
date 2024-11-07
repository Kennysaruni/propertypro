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
import CreateProperty from "./components/CreateProperty/CreateProperty";

function App() {
  const [user, setUser] = useState(null);

  function syncUserState() {
    try {
      const userParams = getJSONPayloadFromJwt(getJwtToken());
      if ("owner_id" in userParams || "tenant_id" in userParams) {
        setUser(userParams);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null)
    }
  }

  console.log(user)

  useEffect(syncUserState,[])
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/tenant" element={<TenantDashboard />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<OwnerDashboard user={user}/>} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/tenants" element={<TenantsList />} />
          <Route path="/createproperty" element={<CreateProperty />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
