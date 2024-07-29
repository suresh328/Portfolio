import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome  size={20} style={{color :'#fff',marginRight:'2rem'}}/>
            <p>Thiverkadu</p>
           </div>
           <div className="phone">
           <h4>
           <FaPhone  size={20} style={{color :'#fff',marginRight:'2rem'}}/>
            +91 7538815402
           </h4>
           </div>
           <div className="email">
           <h4>
           <FaMailBulk  size={20} style={{color :'#fff',marginRight:'2rem'}}/>
            spsuresh3425@gmail.com
           </h4>
           </div>
        </div>
        <div className="right">
           <h3>About </h3>
           <p>Hi, This is <em><strong>Suresh</strong></em> . I am a webdeveloper with (Html, Css, JavaScript and React-Js)  </p>
           <div className="social">
           <FaFacebook  size={30} style={{color :'#fff',marginRight:'1rem'}}/>
           <FaLinkedin  size={30} style={{color :'#fff',marginRight:'1rem'}}/>
           <FaTwitter  size={30} style={{color :'#fff',marginRight:'1rem'}}/>

           </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer;
