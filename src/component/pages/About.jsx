import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer.jsx";
import HeroImg2 from "../home/HeroImg2.jsx";
import Aboutcontent from "../about/Aboutcontent.jsx";
import Internshipcon from "../about/Internshipcon.jsx";
import ProjectsDone from "../about/ProjectsDone.jsx";
import Aboutme from "../about/Aboutme.jsx";

const About = () => {
  return (
    <div>
      <Header />
      <HeroImg2 heading="About." text="Im a friendly Front-End Developer" />
      <Aboutcontent />
      <Aboutme/>
      <Internshipcon />
      <ProjectsDone />
      <Footer />
    </div>
  );
};

export default About;
