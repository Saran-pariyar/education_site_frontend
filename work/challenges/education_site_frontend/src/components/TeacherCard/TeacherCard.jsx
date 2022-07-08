import React from "react";
import "./teacherCard.css";

const TeacherCard = ({ img_src, role, title, desc }) => {
  return (
    <div className="teacher-card">
      <a href="#.">
        <div className="card-image">
          <img src={img_src} alt="Orange" />
        </div>
        <div className="card-body">
          <div className="card-role">
            <p>{role}</p>
          </div>
          <div className="card-title">
            <h3>{title}</h3>
          </div>
          <div className="card-exceprt">
            <p>{desc}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default TeacherCard;
