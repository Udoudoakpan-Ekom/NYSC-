import React from "react";
import "./RemobilizationStyles.css";
import RemobBackground from "../../assets/remobilizationBg.svg";
import Securityimage from "../../assets/Data_security.svg";
import Calender from "../../assets/calender.svg";
import Faq from "../../assets/faq.svg";
import Payment from "../../assets/payment.svg";
import Requirement from "../../assets/requirement.svg";

function Remobilization() {
  return (
    <section>
      <div
        className="remob-main"
        style={{ background: `no-repeat url(${RemobBackground}) ` }}
      >
        <div className="remob-text">
          <p className="remob-main-text">
            New: Online Application for Remobilization!!
          </p>
          <p className="remob-sub-text">Ends on the 3rd of Feb 2022</p>
        </div>
        <button className="apply">Apply for Remobilization</button>
      </div>
      <div className="remobinformation">
        <img src={Securityimage} alt="/" />
        <div className="remobinformation-sub">
          <div className="dob">
            <img src={Calender} alt="/" />
            <p className="dobtext">Change of Date of Birth</p>
          </div>
          <div className="dob">
            <img src={Faq} alt="/" />
            <p className="dobtext">Frequently Asked Question (FAQ)</p>
          </div>
          <div className="dob">
            <img src={Payment} alt="/" />
            <p className="dobtext">Guidelines on Payment</p>
          </div>
          <div className="dob">
            <img src={Requirement} alt="/" />
            <p className="dobtext">Foreign P.C.M Requirements</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Remobilization;
