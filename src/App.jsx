// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import Sidemenu from "./components/Sidemenu/Sidemenu";
// import Listings from "./components/Listings/Listings";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <Navbar />
//       <div className="listings">
//         <Sidemenu />
//         <div>
//           <Listings />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidemenu from "./components/Sidemenu/Sidemenu";
import Listings from "./components/Listings/Listings";
import "./App.css";
import Owner from "./pages/Onwer/Owner";
import Tenant from "./pages/Tenant/Tenant";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Owner/> */}
      <Tenant/>
    </div>
  );
}

export default App;
