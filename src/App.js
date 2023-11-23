import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory";
import AddImage from "./pages/AddImage";
import Welcome from "./pages/Welcome";
import About from "./pages/about";

//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login"; // Adjust the path based on your structure
// Adjust the path based on your structure
import Registration from "./components/Registration";
const App = () => {
  const [welcome, setWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setWelcome(false);
    }, 6000);
  });
  return (
    <>
      {welcome ? (
        <Welcome />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/add-image" element={<AddImage />} />
            <Route path="/login" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/Register" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;

//  <Router>
//         <Navbar />

//         <div className="container my-3">
//           <Routes>
//             {<Route exact path="/" element={<Login />}></Route>}
//             {
//               <Route
//                 exact
//                 path="/registration"
//                 element={<Registration />}
//               ></Route>
//             }
//             {<Route exact path="/login" element={<Login />}></Route>}
//             {/* {<Route exact path="/contact" element={<Contact />}></Route>} */}
//             </Routes>
//             </div>
//           </Router>
