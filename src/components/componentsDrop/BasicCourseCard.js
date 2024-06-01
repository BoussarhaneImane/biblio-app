import React from 'react';
import './CourseCard.css';
import imgA from '../../images/crA.jpg'  
const BasicCourseCard = () => {
  return (
    <div className="course-card">
      <h3 className="course-title">Basic English Course</h3>
      <img className='imgs' src={imgA}/>
      <p className="course-description">Learn the basics of English grammar and vocabulary.</p>
      <div className="course-details">
        <span className="price">$49.99</span>
        <button className="btn-enroll">Take It</button>
      </div>
    </div>
  );
};

export default BasicCourseCard;
