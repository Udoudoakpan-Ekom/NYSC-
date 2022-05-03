import React from "react";
import NYSCCorper from "../../assets/nysc.svg";
import "./Modalstyle.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <section onClick={onClose} className="signin-overlay">
      {/* <h1 className="header-text">Create Account</h1> */}
      <div onClick={(e) => e.stopPropagation()} className="signin-container">
        <div className="signin-content">
          <p className="signin-txt">Sign-in</p>
          <form className="signin-form">
            <div className="inputform">
              <label htmlFor="" className="signin-label">
                Your Email
              </label>
              <input
                type="email"
                className="signin-input"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="inputform">
              <label htmlFor="" className="signin-label">
                Your Password
              </label>
              <input
                type="password"
                className="signin-input"
                placeholder="Your Password"
              />
            </div>
          </form>
          <div className="rememberpass">
            <div className="remember-in">
              <input
                type="checkbox"
                name="remember"
                id=""
                className="input-btn"
              />
              <label htmlFor="remember" className="remember-txt">
                Remember Me
              </label>
            </div>

            <p className="remember-txt"> Forgot password?</p>
          </div>
          <button className="signin-btn">Sign in</button>
          <div className="signup-indiv">
            <p className="signup-in-txt">Not yet a corp member?</p>
            <a href="" className="signup">
              Create an account
            </a>
          </div>
        </div>
        <div className="signin-content-img">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <h2 className="welcome-text no-mb">Welcome</h2>
          <img
            src={NYSCCorper}
            alt="/"
            style={{ height: "350px", margin: "0 auto", width: "100%" }}
          />
          <button className="signin-btn">Sign up</button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
