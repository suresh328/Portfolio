import React from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img4 from "../assets/img3.png"
import img5 from "../assets/img3.png"
import img6 from "../assets/img3.png"


import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-heading">Projects - Work</div>
      <div className="project-container">
        <div className="project-card">
          <img src={img2} alt="img" />
          <h2 className="project-title">Calculator ( Html, css )</h2>
          <div className="project-details">
          <div className="pro-buttons">
              <NavLink to="https://calculator-mu-liart.vercel.app/" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/suresh328/calculator.git" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={img1} alt="img" />
          <h2 className="project-title">Quiz-App (Html, Css, JS)</h2>
          <div className="project-details">
          <div className="pro-buttons">
              <NavLink to="https://basicsquizapp.vercel.app/" className="btn">
                View
              </NavLink>
              <NavLink to="https://github.com/suresh328/Quizapp.git" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={img6} alt="img" />
          <h2 className="project-title">Ecommerce website</h2>
          <div className="project-details">
          <div className="pro-buttons">
              <NavLink to="url.com" className="btn">
                View
              </NavLink>
              <NavLink to="url.com" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        

       
      </div>
    </div>
  );
};

export default Work;

