import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CourseCategories.css';
import img1 from '../../images/appmobile.jpg'
import img2 from '../../images/data.jpg'
import img3 from '../../images/web.jpg'
const CourseCategories = () => {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
     <>
    <div className="course-categories">
      <h2>Explore Our Categories</h2>
      <Slider {...settings}>
        <div className="category">
          <img src={img1} alt="Programming" />
          <h3>Application Mobile</h3>
        </div>
        <div className="category">
          <img src={img2} alt="Data Science" />
          <h3>Data Science</h3>
        </div>
        <div className="category">
          <img src={img3} alt="Web Development" />
          <h3>Web Development</h3>
        </div>
      
      </Slider>
      
    </div>
    <h1>Welcome Students !</h1>
    </>
  );
};

export default CourseCategories;
