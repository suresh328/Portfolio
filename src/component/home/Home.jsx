import React from 'react'
import Header from '../common/Header'
import Hero from "../home/Hero.jsx"
import Footer from '../common/Footer.jsx'
import Projectwork from "../home/Projectwork.jsx"
import Aboutcontent from '../extraadding/Aboutcontent.jsx'
import Carditem from '../extraadding/Carditem.jsx'
import Formcontant from '../extraadding/Formcontant.jsx'




function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Aboutcontent/>
      <Projectwork/>
      <Carditem/>
      <Formcontant/>
      <Footer/>
    </div>
  )
}

export default Home
