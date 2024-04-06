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

function App() {
  return (
    <div>
      <Navbar />
      {/* <Owner/> */}
      <Tenant/>
      {/* <Apartment/> */}
      {/* <ImageSlider/> */}
      {/* <Properties/> */}
      {/* <TenantsList/> */}
    </div>
  );
}

export default App;
