import React from "react";
import NYSCLogo from "../../assets/NYSC_logo.svg";
import "./LogoAndShadowStyle.css";

function LogoAndShadow() {
  return (
    <div className="absolute-div zindex">
      <img
        src={NYSCLogo}
        alt="/"
        style={{ background: " transparent" }}
        className="img-abs"
      />
      <div className="shadow"></div>
    </div>
  );
}

export default LogoAndShadow;
