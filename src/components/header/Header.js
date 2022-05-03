import React, { useState } from "react";
import "./Headerstyle.css";

import Home from "../../Pages/home/Home";
import Modal from "../../Pages/modal/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Modal from "../../Pages/modal/Modal";
import NYSCLogo from "../../assets/NYSC_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Router>
      <div className="header">
        <div className="left gap">
          <img src={NYSCLogo} alt="NYSC logo" />
          <div className="logo-all-text">
            <p className="logo-text"> National Youth Service Corps</p>
            <p className="logo-sub-text">Service and humility</p>
          </div>
        </div>
        <div className="right">
          <ul className="main-nav gap">
            {/* <Link to="/">          </Link> */}
            <li className="nav-list">
              <Link to="/">Payment Status</Link>
            </li>
            <li className="nav-list">
              <Link to="/">Senate list</Link>
            </li>
            <li className="nav-list">
              <Link to="/">Graduation list</Link>
            </li>
            <li className="nav-list">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="nav-list modal" onClick={() => setOpenModal(true)}>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Modal />} />
      </Routes>
    </Router>
  );
};

export default Header;
