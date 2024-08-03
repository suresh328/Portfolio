import React from 'react'
import {Link} from "react-router-dom"
import react1 from "../assets/react1.png"
import react2 from "../assets/react2.png"


function Aboutcontent() {
  return (
    <>
    <div className="about-heading">
       <h1>About Me.</h1>
    </div>
    <div className='about'>
      
      <div className="about-left">
         <h1>Who Am I?</h1>
         <p >I am always keen on learning new technologies and improving my craft. Thank you for taking the time to learn more about me!</p>
        <Link to="/contact" >
        <button className="btn">
            contact
        </button>
        </Link>
      </div>
      <div className="about-right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className='img' alt="true" />
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className='img' alt="true" />
                </div>
            </div>
      </div>
    </div>
    </>
  )
}

export default Aboutcontent
