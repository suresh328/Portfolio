import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer.jsx'
import HeroImg2 from '../home/HeroImg2.jsx'
import Aboutcontent from '../extraadding/Aboutcontent.jsx'

const About =() =>{
  return (
 <div>
      <Header/>
      <HeroImg2 heading="About." text="Im a friendly Front-End Developer" />
      <Aboutcontent/>
      <Footer/>
    </div>
    
  )
}

export default About;