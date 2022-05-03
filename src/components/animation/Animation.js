import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/home/Home";
import Modal from "./Pages/modal/Modal";

function Animation() {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/login" element={<Modal />} />
    </Routes>
  );
}

export default Animation;
