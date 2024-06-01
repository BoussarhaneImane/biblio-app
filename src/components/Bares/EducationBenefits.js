
import React from 'react';
import './EducationBenefits.css';
import { FaClock, FaGlobe, FaMoneyBillWave, FaChalkboardTeacher, FaLaptop, FaMapMarkerAlt, FaUserCheck, FaUsers } from 'react-icons/fa';
import img4 from '../../images/lib4.jpg';

const EducationBenefits = () => {
  return (
    <>
      <h2>Benefits of Studying Online</h2>
      <div className="education-container">
        <div className="image-section">
          <img 
            src={img4}
            alt="Online Education" 
            className="education-image" 
          />
        </div>
        <div className="benefits-section">
          <ul className="benefits-list">
            <li><FaClock className="icon" /><strong>Flexible Schedule:</strong> Students can take courses at their own pace.</li>
            <li><FaGlobe className="icon" /><strong>Wide Range of Courses:</strong> Choose courses that fit your interests.</li>
            <li><FaMoneyBillWave className="icon" /><strong>Cost Reduction:</strong> No transportation, housing, or physical materials costs.</li>
            <li><FaChalkboardTeacher className="icon" /><strong>Personalized Learning:</strong> Tailored to individual needs and levels.</li>
            <li><FaLaptop className="icon" /><strong>Improved Technical Skills:</strong> Enhances digital literacy.</li>
            <li><FaMapMarkerAlt className="icon" /><strong>Geographical Accessibility:</strong> Removes geographical barriers.</li>
            <li><FaUserCheck className="icon" /><strong>Autonomy and Responsibility:</strong> Develops self-discipline and responsibility.</li>
            <li><FaUsers className="icon" /><strong>Global Interaction and Collaboration:</strong> Interact with students and teachers worldwide.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default EducationBenefits;