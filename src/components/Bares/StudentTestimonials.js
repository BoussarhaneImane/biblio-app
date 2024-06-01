import React from 'react';
import './StudentTestimonials.css';
import img1 from '../../images/st1.jpg'
import img2 from '../../images/st2.jpg'
import img3 from '../../images/st8.jpg'
const testimonials = [
  {
    name: 'Sarah Johnson',
    course: 'Introduction to Web Development',
    testimonial: "I'm amazed by the quality of the course! The instructor explains concepts clearly, and the hands-on projects are incredibly helpful. Highly recommended!",
    image: img1,
  },
  {
    name: 'Michael Smith',
    course: 'Data Science Fundamentals',
    testimonial: "This course exceeded my expectations! The material is comprehensive, and the exercises really reinforce learning. I'm excited to apply what I've learned.",
    image: img2,
  },
  {
    name: 'Emma Williams',
    course: 'Graphic Design Essentials',
    testimonial: "I'm blown away by the quality of instruction in this course. The instructor's expertise is evident, and the assignments are challenging yet enjoyable. 10/10!",
    image: img3,
  },
];

const StudentTestimonials = () => {
  return (
     <>
     <h2>What Students Say About the Quality of Courses</h2>
    <div className="testimonials-container">
   
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <img src={testimonial.image} alt={testimonial.name} className="student-image" />
            <div className="testimonial-info">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.course}</p>
              <p className="testimonial-text">{testimonial.testimonial}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default StudentTestimonials;
