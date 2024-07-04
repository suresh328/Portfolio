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
            +91 987676567
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
           <h3>About this company</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in sint facere quidem aperiam eligendi minima odio itaque veritatis enim!</p>
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
