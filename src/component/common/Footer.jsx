import React from 'react'
import { FaFacebook, FaLinkedin,  FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
       
        
           <h3> &copy; CopyRights | Designed by Suresh </h3>
        
          <div className="social">
            <FaFacebook  size={30} style={{color :'#fff',marginRight:'1rem'}}/>
            <FaLinkedin  size={30} style={{color :'#fff',marginRight:'1rem'}}/>
            <FaTwitter  size={30} style={{color :'#fff',marginRight:'1rem'}}/>
          </div>

           
      </div>
      
    </div>
  )
}

export default Footer;
