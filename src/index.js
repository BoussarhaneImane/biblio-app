import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ConceptIT from './components/componentsDrop/ConceptIT';
import EnglishCourses from './components/componentsDrop/EnglishCourses';
import PaymentPage from './components/componentsDrop/PaymentPage ';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="courses/development/conceptit" element={<ConceptIT />} />
      <Route path="/courses/learning-english" element={<EnglishCourses />} />
      <Route path="/payment"  element={<PaymentPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
