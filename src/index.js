import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConceptIT from './components/componentsDrop/ConceptIT';
import EnglishCourses from './components/componentsDrop/EnglishCourses';
import PaymentPage from './components/componentsDrop/Payment';
import PageNot from './components/componentsDrop/PageNot';
import Login from './components/connexion/Login';
import SignupC from './components/connexion/SignupC';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
   
      <Route path="courses/development/conceptit" element={<ConceptIT/>} />
      <Route path="/courses/learning-english" element={<EnglishCourses/>} />
      <Route path="/payment"  element={<PaymentPage/>} />
      <Route path="/NOT"  element={<PageNot/>}/>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/signup"  element={<SignupC/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
