import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img5 from "../assets/img5.png";

import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <div className="project-heading">Projects - Work</div>
      <div className="project-container">
        <div className="project-card">
          <img src={img5} alt="img" />
          <h2 className="project-title">Weather App ( Html, css, JS, React )</h2>
          <div className="project-details">
            <div className="pro-buttons">
              <Link
                to="https://calculator-mu-liart.vercel.app/"
                className="btn"
              >
                view{" "}
              </Link>
              <Link
                to="https://github.com/suresh328/calculator"
                className="btn"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={img2} alt="img" />
          <h2 className="project-title">Calculator ( Html, css )</h2>
          <div className="project-details">
            <div className="pro-buttons">
              <Link
                to="https://calculator-mu-liart.vercel.app/"
                className="btn"
              >
                view{" "}
              </Link>
              <Link
                to="https://github.com/suresh328/calculator"
                className="btn"
              >
                Source
              </Link>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={img1} alt="img" />
          <h2 className="project-title">Quiz-App (Html, Css, JS)</h2>
          <div className="project-details">
            <div className="pro-buttons">
              <Link to="https://basicsquizapp.vercel.app/" className="btn">
                View
              </Link>
              <Link
                to="https://github.com/suresh328/Quizapp.git"
                className="btn"
              >
                Source
              </Link>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={img3} alt="img" />
          <h2 className="project-title">QRcode Generator (Html, css, js)</h2>
          <div className="project-details">
            <div className="pro-buttons">
              <Link
                to="https://qrcode-generator-wine.vercel.app/"
                className="btn"
              >
                View
              </Link>
              <Link
                to="https://github.com/suresh328/Qrcode-generator"
                className="btn"
              >
                Source
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
