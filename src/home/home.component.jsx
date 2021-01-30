import React from "react";
import Banner from "../components/banner/banner.component";
import Footer from "../components/footer/footer.component";
import NavComponent from "../components/navbar/navbar.component";
import Partners from "../components/partners/partners.component";
import Reviews from "../components/reviews/reviews.component";
// import Nav from "../components/navbar/navbar.component";
import Vision from "../components/vision-statement/vision.component";
import Word from "../components/word-from-partner/word.component";
import Insights from "../insights/insights.component";
import Practice from "../practice-areas/practice.page";

function Home() {
  return (
    <div>
      {/* navbar
      banner
      vision
      word from partner */}
      <NavComponent />
      <Banner />
      <Vision />
      <Word />
      <Practice />
      <Partners />
      <Reviews />
      <Insights />
      <Footer />
    </div>
  );
}

export default Home;
