import React from "react";

import "./InformationStyle.css";

import Background from "../../assets/Background.svg";

import Navbar from "../header/Header";
import Heros from "../heros/Heros";
import LogoAndShadow from "../logoAndShadow/LogoAndShadow";
import Remobilization from "../remobilization/Remobilization";
import Linksect from "../linksect/Linksect";
import Footer from "../footer/Footer";

function Information() {
  return (
    <div>
      <section
        className="heroIn"
        //style={{ backgroundImage: `url(${Background})`, filter: `blur(9px)` }}
      >
        {/* <Navbar /> */}
        <Heros />
        <LogoAndShadow />
      </section>
      <section>
        <Remobilization />
      </section>
      <Linksect />
      <Footer />
    </div>
  );
}

export default Information;
