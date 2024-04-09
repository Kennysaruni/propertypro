import React from "react";
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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <Lease/> */}
        <Routes>
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path='/dashboard' element={<OwnerDashboard/>}/>
          <Route path='/listings' element={<Listings/>}/>
          <Route path='/apartment' element={<Apartment/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/tenants' element={<TenantsList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
