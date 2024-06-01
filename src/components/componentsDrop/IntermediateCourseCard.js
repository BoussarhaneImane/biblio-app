import React from 'react';
import './CourseCard.css'; 
import imgB from '../../images/crB.jpg'  
const IntermediateCourseCard = () => {
  return (
    <div className="course-card">
      <h3 className="course-title">Intermediate English Course</h3>
      <img className='imgs' src={imgB}/>
      <p className="course-description">Improve your English with more complex grammar and vocabulary.</p>
      <div className="course-details">
        <span className="price">$69.99</span>
        <button className="btn-enroll">Take It</button>
      </div>
    </div>
  );
};

export default IntermediateCourseCard;
