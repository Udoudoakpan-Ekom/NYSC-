import React from "react";
import "./Linksectstyle.css";
import Certificate from "../../assets/certificate.svg";
import Home from "../../assets/home.svg";
import Arrow from "../../assets/arrow.svg";

function Linksect() {
  return (
    <section
      className="linksect"
      style={{
        backgroundColor: " rgba(240, 255, 227, 1)",
      }}
    >
      <div className="container-link container ">
        <div className="certificate">
          <img
            src={Certificate}
            alt="/"
            style={{
              paddingTop: "20px",
            }}
          />
          <div className="cert-text">
            <p className="cert-ft">Verify Certificates</p>
            <p className="cert-st">Discharge, Exclusion & Exemption</p>
            {/* <br /> */}
          </div>
          <img src={Arrow} alt="/" className="img-arrow arrow-margin" />
        </div>
        <div className="certificate">
          <img
            src={Home}
            alt="/"
            style={{
              paddingTop: "20px",
            }}
          />
          <div className="cert-text">
            <p className="cert-ft">Visit Main Site</p>
            <p className="cert-st">
              Visit NYSC website for <br />
              information and updates
            </p>
          </div>
          <img src={Arrow} alt="/" className="img-arrow" />
        </div>
        <div className="certificate">
          <img
            src={Certificate}
            alt="/"
            style={{
              paddingTop: "20px",
            }}
          />
          <div className="cert-text">
            <p className="cert-ft">Payment Status</p>
            <p className="cert-st">To check your Payment Status</p>
          </div>
          <img src={Arrow} alt="/" className="img-arrow arrow-margin" />
        </div>
        {/* <div className="main-site"></div> */}
      </div>
    </section>
  );
}

export default Linksect;
