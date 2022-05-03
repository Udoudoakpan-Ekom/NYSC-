import React from "react";

import FooterBg from "../../assets/footerBg.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Facebook from "../../assets/Facebook.svg";
import Google from "../../assets/Google+.svg";
import "./FooterStyle.css";
function Footer() {
  return (
    <div>
      <section
        className="sect-footer"
        style={{
          backgroundImage: `url(${FooterBg})`,
          backgroundRepeat: "no-repeat",
          // height: "120px",
        }}
      >
        <div className="container sectfooter">
          <p className="footer-ft">Powered by AppJewel</p>
          <p className="footer-st">
            Copyright © 2022 National Youth Service Corps. All rights reserved.
            Privacy Policy
          </p>
          <div className="footer-icons">
            <img src={Twitter} alt="/" className="icons-ft" />
            <img src={Instagram} alt="/" className="icons-ft" />
            <img src={Facebook} alt="/" className="icons-ft" />
            <img src={Google} alt="/" className="icons-ft" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
