import React from 'react';
import './CourseCard.css'; 
import imgC from '../../images/crC.jpg'  
const AdvancedCourseCard = () => {
  return (
    <div className="course-card">
      <h3 className="course-title">Advanced English Course</h3>
    <img className='imgs' src={imgC}/>
      <p className="course-description">Master the English language with advanced grammar and vocabulary.</p>
      <div className="course-details">
        <span className="price">$89.99</span>
        <button className="btn-enroll">Take It</button>
      </div>
    </div>
  );
};

export default AdvancedCourseCard;
