import React from 'react';
import './PopularCourses.css';
import img1 from '../../images/lib5.jpg'
import img2 from '../../images/lib6.jpg'
import img3 from '../../images/lib7.jpg'
import imgp1 from '../../images/prof1.jpg'
import imgp2 from '../../images/prof2.jpg'
import imgp3 from '../../images/prof4.jpg'
import { IoIosStar } from "react-icons/io";

const courses = [
  {
    title: 'Introduction to Programming',
    teacher: 'John Doe',
    price: '$99',
    rating: 4.5,
    image: img1,
    teacherImage: imgp1
  },
  {
    title: 'Advanced Mathematics',
    teacher: 'Jane Smith',
    price: '$120',
    rating: 4.8,
    image: img2,
    teacherImage: imgp2
  },
  {
    title: 'Learning English',
    teacher: 'Emily Johnson',
    price: '$80',
    rating: 4.7,
    image: img3,
    teacherImage: imgp3
  }
];

const PopularCourses = () => {
  return (
     <>
     <h2>Our Popular Courses</h2>
    <div className="courses-container">
      
      <div className="courses-list">
        {courses.map((course, index) => (
          <div className="course-cardC" key={index}>
            <img src={course.image} alt={course.title} className="course-imageP" />
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="teacher-info">
                <img src={course.teacherImage} alt={course.teacher} className="teacher-image" />
                <span>{course.teacher}</span>
              </div>
              <p className="course-price" style={{fontSize:"1.5rem"}}>{course.price}</p>
            
              <p className="course-rating" style={{fontSize:"1.4rem"}}>Rating: {course.rating} <IoIosStar size={18} style={{color:'rgb(250, 230, 13)'}} /></p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default PopularCourses;
