import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer.jsx'
import HeroImg2 from '../home/HeroImg2.jsx';
import Carditem from '../extraadding/Carditem.jsx';
import Projectwork from '../home/Projectwork.jsx';

const Projects =() => {
  return (
 <div>
      <Header/>
      <HeroImg2 heading="PROJECTS." text= "Some project have done"/>
      <Projectwork />
      <Carditem/>
      <Footer/>
    </div>
    
  )
}

export default Projects;