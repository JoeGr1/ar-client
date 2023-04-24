import React from "react";

import "./HomePage.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Navbar />

      <div className="homepage__text">
        <p className="homepage__intro">
          Alexander Randall is a British artist who uses concrete to explore the
          boundaries between transience and presence. He works from his studio
          south of London and his pieces hang in private and commercial
          collections in the UK, Europe, the US and Asia
        </p>

        <p className="homepage__cta">
          Follow Alex on Instagram: @
          <Link
            className="homepage__link"
            to="https://www.instagram.com/alexanderrandallart/"
          >
            alexanderrandallart
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
