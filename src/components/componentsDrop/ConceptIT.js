import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConceptIT.css';
import img1 from '../../images/cr1.jpg';
import img2 from '../../images/cr2.jpg';
import img3 from '../../images/cr3.jpg';
import img4 from '../../images/cr4.jpg';
import img5 from '../../images/cr5.jpg';
import img6 from '../../images/cr6.jpg';
import img7 from '../../images/cr7.jpg';
import img8 from '../../images/cr8.jpg';
import img9 from '../../images/cr9.jpg';
import img10 from '../../images/cr10.jpg';
import img11 from '../../images/cr11.jpg';
import img12 from '../../images/cr12.jpg';
import img13 from '../../images/cr13.jpg';
import img14 from '../../images/cr14.jpg';
import img15 from '../../images/cr15.webp';
import img16 from '../../images/cr16.jpg';
import img17 from '../../images/cr17.jpg';
import img18 from '../../images/cr18.jpg';
import Footer from '../Bares/Footer';
import FirstNav from '../../components/Navbar/FirstNav';
import Navbar from '../../components/Navbar/Navbar';

const ConceptIT = () => {
  const navigate = useNavigate();

 
  const handleTakeItClick = (course) => {
    const userName = localStorage.getItem('userName'); // Check for authentication

    if (!userName) {
      alert('You must be authenticated to proceed to payment.');
      navigate('/login'); // Redirect to login page if not authenticated
    } else {
      const cartKey = `cart_${userName}`;
      const cart = JSON.parse(localStorage.getItem(cartKey)) || [];
      cart.push(course);
      localStorage.setItem(cartKey, JSON.stringify(cart));
      navigate('/payment'); // Redirect to payment page
    }
  };
  
  const categories = [
    {
      title: "Web Development",
      courses: [
        { 
          label: "HTML & CSS", 
          path: "/courses/development/web/html-css", 
          imgSrc: img1,
          description: "Learn the basics of HTML and CSS to build beautiful web pages.",
          price: "$50"
        },
        { 
          label: "JavaScript", 
          path: "/courses/development/web/javascript", 
          imgSrc: img2,
          description: "Master JavaScript, the most popular programming language for web development.",
          price: "$75"
        },
        { 
          label: "React", 
          path: "/courses/development/web/react", 
          imgSrc: img3,
          description: "Build dynamic and modern web applications using React.",
          price: "$100"
        }
      ]
    },
    {
      title: "App Development",
      courses: [
        { 
          label: "Android Development", 
          path: "/courses/development/app/android", 
          imgSrc: img4,
          description: "Create powerful and responsive applications for Android devices.",
          price: "$120"
        },
        { 
          label: "iOS Development", 
          path: "/courses/development/app/ios", 
          imgSrc: img5,
          description: "Learn to build beautiful and efficient apps for iOS.",
          price: "$130"
        },
        { 
          label: "Flutter", 
          path: "/courses/development/app/flutter", 
          imgSrc: img6,
          description: "Develop cross-platform apps using Flutter and Dart.",
          price: "$110"
        }
      ]
    },
    {
      title: "Desktop Apps",
      courses: [
        { 
          label: "Java", 
          path: "/courses/development/desktop/java", 
          imgSrc: img7,
          description: "Develop robust desktop applications with Java languge.",
          price: "$90"
        },
        { 
          label: "C#", 
          path: "/courses/development/desktop/csharp", 
          imgSrc: img8,
          description: "Create powerful desktop applications using C#.",
          price: "$85"
        },
        { 
          label: "Electron", 
          path: "/courses/development/desktop/electron", 
          imgSrc: img9,
          description: "Build cross-platform desktop apps with Electron.",
          price: "$95"
        }
      ]
    },
    {
      title: "Data Science",
      courses: [
        { 
          label: "Python for Data Science", 
          path: "/courses/data-science/python", 
          imgSrc: img10,
          description: "Learn Python programming specifically for data science.",
          price: "$80"
        },
        { 
          label: "R Programming", 
          path: "/courses/data-science/r", 
          imgSrc: img11,
          description: "Master R programming for data analysis and statistics.",
          price: "$70"
        },
        { 
          label: "Data Visualization", 
          path: "/courses/data-science/visualization", 
          imgSrc: img12,
          description: "Create stunning data visualizations with various tools.",
          price: "$60"
        }
      ]
    },
    {
      title: "Machine Learning",
      courses: [
        { 
          label: "Machine Learning Basics", 
          path: "/courses/machine-learning/basics", 
          imgSrc: img13,
          description: "Understand the basics of machine learning and its applications.",
          price: "$150"
        },
        { 
          label: "Deep Learning", 
          path: "/courses/machine-learning/deep-learning", 
          imgSrc: img14,
          description: "Dive deep into deep learning techniques and frameworks.",
          price: "$180"
        },
        { 
          label: "Natural Language Processing", 
          path: "/courses/machine-learning/nlp", 
          imgSrc: img15,
          description: "Explore the field of NLP and build models to process text.",
          price: "$170"
        }
      ]
    },
    {
      title: "Big Data",
      courses: [
        { 
          label: "Hadoop", 
          path: "/courses/big-data/hadoop", 
          imgSrc: img16,
          description: "Learn to manage large datasets with Hadoop.",
          price: "$140"
        },
        { 
          label: "Spark", 
          path: "/courses/big-data/spark", 
          imgSrc: img17,
          description: "Master data processing with Apache Spark.",
          price: "$160"
        },
        { 
          label: "Kafka", 
          path: "/courses/big-data/kafka", 
          imgSrc: img18,
          description: "Implement data streaming with Apache Kafka.",
          price: "$150"
        }
      ]
    }
  ];

  return (
    <>
      <FirstNav />
      <Navbar />
      <div className="concept-it">
        <h1>Concept IT Courses</h1>
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <h2>{category.title}</h2>
            <div className="course-gridX">
              {category.courses.map((course, index) => (
                <div key={index} className="course-cardH">
                  <img src={course.imgSrc} alt={course.label} className="course-imageC" />
                  <span className="course-label">{course.label}</span>
                  <p className="course-description">{course.description}</p>
                  <p className="course-price">{course.price}</p>
                  <button onClick={() => handleTakeItClick(course)} className="buttonhh">Take It</button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default ConceptIT;
