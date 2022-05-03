import React, { useEffect } from "react";
import Information from "../../components/information/Information";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Information />
    </div>
  );
};

export default Home;
