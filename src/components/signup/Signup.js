import React from "react";
import NYSCCorper from "../../assets/nysc.svg";
// import "./Signupstyle.css";

function Signup() {
  return (
    <section className="signup">
      {/* <h1 className="header-text">Create Account</h1> */}
      <div className="signup-in">
        <div className="signup-content">
          <p className="signup-txt">Sign-in</p>
          <form className="signup-form">
            <div className="inputform">
              <label htmlFor="" className="signup-label">
                Your Email
              </label>
              <input
                type="email"
                className="signin-input"
                placeholder="me@gmail.com"
              />
            </div>
            <div className="inputform">
              <label htmlFor="" className="signup-label">
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
          <button className="signup-btn">Log in</button>
          <div className="signup-indiv">
            <p className="signin-up-txt">Not yet a corp member?</p>
            <a href="" className="signup">
              Create an account
            </a>
          </div>
        </div>
        <div className="signup-content-img">
          <h2 className="welcome-text no-mb">Welcome</h2>
          <img src={NYSCCorper} alt="/" />
        </div>
      </div>
    </section>
  );
}

export default Signup;
