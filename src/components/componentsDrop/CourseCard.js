import React from 'react';
import './CourseCard.css';

const CourseCard = ({ title, imgSrc, description, price }) => {
  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>
      <img className="imgs" src={imgSrc} alt={title} />
      <p className="course-description">{description}</p>
      <div className="course-details">
        <span className="price">{price}</span>
        <button className="btn-enroll">Take It</button>
      </div>
    </div>
  );
};

export default CourseCard;
