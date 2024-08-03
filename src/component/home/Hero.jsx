import React from "react";
import { Link } from "react-router-dom";
import portfolio from "../assets/portfolio.png"

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="mask">
          <img className="intro-img" src={portfolio} alt="Intro" />
        </div>
        <div className="content">
          <p>Hi I'm A Suresh</p>
          <h1><span >React-js</span> Developer</h1>

          <div>
            <Link to="/Project" className="btn">
              Projects
            </Link>
            <Link to="/Contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
