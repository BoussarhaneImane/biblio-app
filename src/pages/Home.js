import React from 'react'
import FirstNav from '../components/Navbar/FirstNav'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import FirstBare from '../components/Bares/FirstBare'
import EducationBenefits from  '../components/Bares/EducationBenefits'
import PopularCourses from  '../components/Bares/PopularCourses '
import StudentTestimonials from  '../components/Bares/StudentTestimonials'
import Footer from '../components/Bares/Footer'
import CourseCategories from '../components/Bares/CourseCategories'
function Home() {
  return (
    <div>
      <FirstNav/>
      <Navbar/>
      <Header/>
      <FirstBare/>
      <EducationBenefits/>
      <PopularCourses/>
      <StudentTestimonials/>
      <CourseCategories/>
      <Footer/>
    </div>
  )
}

export default Home
