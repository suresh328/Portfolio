import React from "react";
import Header from "../common/Header";
import Hero from "../home/Hero.jsx";
import Footer from "../common/Footer.jsx";
import Projectwork from "../home/Projectwork.jsx";
import Carditem from "../extraadding/Carditem.jsx";
import Formcontant from "../extraadding/Formcontant.jsx";
import Aboutcontent from "../about/Aboutcontent.jsx";
import Internshipcon from "../about/Internshipcon.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Aboutcontent />
      <Internshipcon />
      <Projectwork />
      <Carditem />
      <Formcontant />
      <Footer />
    </div>
  );
}

export default Home;
