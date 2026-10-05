import React from 'react';
import CourseCard from './CourseCard';
import coursesData from './coursesData';
import './EnglishCourses.css';
import FirstNav from '../Navbar/FirstNav';
import Navbar from '../Navbar/Navbar';
import Footer from '../Bares/Footer';

function EnglishCourses() {
  return (
    <>
      <FirstNav />
      <Navbar />
      <main className='english-courses-page'>
        <h1 className='h-title'>English Courses</h1>
        <div className='course-grid'>
          {coursesData.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              imgSrc={course.imgSrc}
              description={course.description}
              price={course.price}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EnglishCourses;
