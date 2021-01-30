import React from "react";
import Footer from "../components/footer/footer.component";
import NavComponent from "../components/navbar/navbar.component";
import HeroComponent from "./hero.component";
import Insights from "./insights.component";

function InsightsPage() {
  return (
    <div>
      {/* nav
      hero
      latestnews */}
      <NavComponent />
      <HeroComponent />
      <Insights />
      <Footer />
    </div>
  );
}

export default InsightsPage;
