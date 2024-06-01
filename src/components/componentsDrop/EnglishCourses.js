import React from 'react'
import BasicCourseCard from './BasicCourseCard'
import IntermediateCourseCard from './IntermediateCourseCard'
import AdvancedCourseCard from './AdvancedCourseCard'
import './EnglishCourses.css'
import FirstNav from '../Navbar/FirstNav'
import Navbar from '../Navbar/Navbar'
import Footer from '../Bares/Footer'

function EnglishCourses() {
  return (
    <>
      <FirstNav/>
      <Navbar/> 
      <h1 className='h-title'>English Courses</h1>   
      <div className='course-grid'>
        <div className='course-card'><BasicCourseCard/></div>
        <div className='course-card'><IntermediateCourseCard/></div>
        <div className='course-card'><AdvancedCourseCard/></div>
      </div>
      <Footer/>
    </>
  )
}

export default EnglishCourses
