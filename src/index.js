import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ConceptIT from './components/componentsDrop/ConceptIT';
import EnglishCourses from './components/componentsDrop/EnglishCourses';
import PaymentPage from './components/componentsDrop/Payment';
import PageNot from './components/componentsDrop/PageNot';
import { LearningProvider } from './context/LearningContext';
import { AuthPage, CertificatesPage, CourseDetailPage, CoursesPage, DashboardPage, HomePage, LearningPage, NotFoundPage, ProfilePage } from './pages/LearningPages';


ReactDOM.render(
  <BrowserRouter>
    <LearningProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id/learn" element={<LearningPage />} />
        <Route path="/courses/development/conceptit" element={<ConceptIT />} />
        <Route path="/courses/learning-english" element={<EnglishCourses />} />
        <Route path="/courses/:id" element={<CourseDetailPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/NOT" element={<PageNot />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage mode="register" />} />
        <Route path="/signup" element={<AuthPage mode="register" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </LearningProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
