import React from "react";
import Footer from "../components/footer/footer.component";
import NavComponent from "../components/navbar/navbar.component";
import BannerComponent from "./banner.component";
import UserHeader from "./banner2.component";
import TeamComponent from "./team.component";

function About() {
  return (
    //   navbar
    //   Banner
    //   Team
    //   footer
    <>
      <NavComponent />
      <BannerComponent />
      {/* <UserHeader /> */}
      <TeamComponent />
      <Footer />
    </>
  );
}

export default About;
