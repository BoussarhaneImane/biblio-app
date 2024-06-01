import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import FirstBare from '../../components/Bares/FirstBare';
import EducationBenefits from '../../components/Bares/EducationBenefits';
import PopularCourses from '../../components/Bares/PopularCourses ';
import StudentTestimonials from '../../components/Bares/StudentTestimonials';
import CourseCategories from '../../components/Bares/CourseCategories';
import Footer from '../../components/Bares/Footer';


const Home = () => {
  return (
    <main>
        <Header />
        <FirstBare/>
        <EducationBenefits/>
        <PopularCourses/>
        <StudentTestimonials/>
        <CourseCategories/>
        <Footer/>
        <Outlet />
    </main>
  );
}

export default Home;
