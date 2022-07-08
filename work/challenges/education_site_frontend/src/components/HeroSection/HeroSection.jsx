import React from "react";
import "./heroSection.css";
import Roll from "react-reveal/Roll";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

const HeroSection = () => {
  return (
    <Fade top>
      <section className="hero-section">
        <div className="container">
          <Flip left>
            <h1 className="heading">Get the best courses on the internet!</h1>
            <p className="desc">
              This a very useful courses and you can take anything from here
            </p>
          </Flip>
          <div className="btn-section">
            <Roll left delay={1000}>
              <button className="btn course-btn">Courses</button>
            </Roll>

            <Roll right delay={1000}>
              <button className="btn apply-btn">Apply Now!</button>
            </Roll>
          </div>
        </div>
      </section>
    </Fade>
  );
};
export default HeroSection;
