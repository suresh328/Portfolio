import React from "react";
import {Route,Routes} from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import './App.css';
import Services from "./component/pages/Services";
import Projects from "./component/pages/Projects";


function App() {
  return (
   
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/service" element={<Services/>} />
            <Route path="/project" element={<Projects/>} />

          </Routes>

    
  );
}

export default App;