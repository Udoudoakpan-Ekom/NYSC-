import React from "react";
import NYSCCorper from "../../assets/nysc.svg";
import Ellipse from "../../assets/Ellipse.svg";
import "./HeroStyle.css";

const Heros = () => {
  return (
    <section className="hero">
      <div className="sub-hero gap-hero">
        <div className="leftIn">
          <h1 className="main-text">Welcome to the NYSC Portal</h1>
          <p className="subtext">
            Though massy cheer who childe partings, of his of feels pillared,
            known sore heart longed feels me did a none, from smile nor the
            vulgar begun, flash dear lowly caught and. It are who but any his
            been ways from from, by might his take as care by. Befell few not
            flow seraphs drugged scape a. Feels of save few vaunted to monks. Of
            his go memory control. Men hall deemed vile long. Save open none
            each her yes weary.
          </p>
        </div>
        <div className="rightIn">
          <img src={Ellipse} alt="Green Ellipse" className="Bg-ellipse" />
          <img
            src={NYSCCorper}
            alt="NYSC Corpers"
            className="nysc-corper"
            // style={{
            //   backgroundImage: `url(${Ellipse})`,
            //   backgroundImage: "no-repeat",
            // }}
          />
        </div>
      </div>
    </section>
  );
};

export default Heros;
