import React from "react";
import "./courseCard.css";
import Zoom from "react-reveal/Zoom";

const CourseCard = ({ src, title, desc, available_courses }) => {
  return (
    <Zoom left>
      <section className="card">
        <img className="image" src={src} alt="image" />
        <div className="text-container">
          <h2 className="title">{title}</h2>
          <h4 className="desc">{desc}</h4>
          <h3 className="enroll-btn">Enroll Now!</h3>
        </div>
      </section>
    </Zoom>
  );
};

export default CourseCard;
