import React from "react";

import "./About.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div className="about-wrapper">
      <Navbar />

      <div className="about__text">
        <p className="about__intro">
          Alexander's leading interest is in the mark of the human hand, whether
          in a single brushstroke or the omissive spaces in between. The
          extraordinary texture and physicality of concrete allows for the
          distillation of a single movement. Inflexible and steadfast, concrete
          both preserves the old and constructs the new; this contradiction is
          precisely what makes it a symbol of modernity. Alexander's work seeks
          to restore the individualism of mark-making often effaced by concrete
          and mass production. Each piece is produced through layers of planning
          that deconstruct complexity, isolating motion without generating
          stasis. His focus as an artist is to remind us, above all, of what it
          is to be present in the 21st century.
        </p>

        <p className="about__cta">
          <Link className="about__link" to="/contact">
            Get in Touch
          </Link>
          for details on available works, commissions, exhibitions,
          collaboration and studio visits.
        </p>
      </div>
    </div>
  );
};

export default About;
