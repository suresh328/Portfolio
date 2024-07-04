import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer.jsx'
import HeroImg2 from '../home/HeroImg2.jsx'
import Formcontant from '../extraadding/Formcontant.jsx'


const Contact =() => {
  return (
 <div>
      <Header/>
      <HeroImg2 heading="Contact." text="Lets have a chat. " />
     <Formcontant/>
      <Footer/>
    </div>
    
  )
}

export default Contact;