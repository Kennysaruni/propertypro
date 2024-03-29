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

function App() {
  return (
    <div>
      <Navbar />
      <div className="a-listings">
        <div className="sidemenu-container"> {/* Add sidemenu-container class here */}
          <Sidemenu />
        </div>
        <div>
          <Listings />
        </div>
      </div>
    </div>
  );
}

export default App;
