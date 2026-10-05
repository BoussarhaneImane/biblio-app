import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLearning } from '../../context/LearningContext';
import { lessonCount } from '../../data/courses';
import './AcademyUI.css';

export function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useLearning();
  const nextTheme = theme === 'dark' ? 'clair' : 'sombre';
  const Icon = theme === 'dark' ? FiSun : FiMoon;
  return <button className={`theme-toggle ${className}`} type="button" onClick={toggleTheme} aria-label={`Activer le thème ${nextTheme}`} title={`Activer le thème ${nextTheme}`}><Icon aria-hidden="true" /></button>;
}

export function AppNavbar() {
  const { user, logout } = useLearning();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const close = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    close();
    navigate('/');
  };

  return (
    <header className="academy-header">
      <div className="academy-nav-wrap">
        <Link className="academy-brand" to="/" onClick={close} aria-label="Atelier, accueil">
          <span className="brand-mark">a.</span><span>atelier<span className="brand-period">.</span></span>
        </Link>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={`academy-nav ${menuOpen ? 'academy-nav-open' : ''}`} aria-label="Navigation principale">
          <NavLink to="/courses" onClick={close}>Cours</NavLink>
          <a href="/#categories" onClick={close}>Catégories</a>
          <a href="/#instructors" onClick={close}>Formateurs</a>
          <a href="/#about" onClick={close}>À propos</a>
          {user ? <>
            <NavLink to="/dashboard" onClick={close}>Mon espace</NavLink>
            <NavLink to="/dashboard#my-courses" onClick={close}>Mes cours</NavLink>
            <NavLink to="/certificates" onClick={close}>Certificats</NavLink>
            <button className="nav-account" type="button" onClick={handleLogout}>Déconnexion</button>
          </> : <Link className="nav-account" to="/login" onClick={close}>Connexion <span aria-hidden="true">↗</span></Link>}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export function AppFooter() {
  return <footer className="academy-footer">
    <div className="footer-main">
      <div><Link className="academy-brand footer-brand" to="/"><span className="brand-mark">a.</span><span>atelier<span className="brand-period">.</span></span></Link><p>Apprendre mieux. Construire la suite.</p></div>
      <div className="footer-links"><Link to="/courses">Explorer les cours</Link><Link to="/register">Créer un compte</Link><a href="mailto:bonjour@atelier.example">Nous contacter</a></div>
      <span className="footer-note">Des savoirs utiles, à votre rythme.</span>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Atelier Learning</span><span>Une expérience d’apprentissage indépendante</span></div>
  </footer>;
}

export function PageFrame({ children, footer = true }) {
  const { theme } = useLearning();
  return <div className="academy-site" data-theme={theme}><AppNavbar /><main>{children}</main>{footer && <AppFooter />}</div>;
}

export function ProgressBar({ value = 0, label }) {
  return <div className="progress-wrap" aria-label={label || `Progression ${value}%`}>
    <div className="progress-track"><span className="progress-fill" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} /></div>
    {label && <span className="progress-label">{label}</span>}
  </div>;
}

export function CourseCard({ course, progress = 0 }) {
  return <article className="course-card">
    <Link className="course-card-image" to={`/courses/${course.id}`}>
      <img src={course.image} alt="" loading="lazy" />
      <span className="course-category">{course.category}</span>
      <span className="course-image-arrow" aria-hidden="true">↗</span>
    </Link>
    <div className="course-card-body">
      <div className="course-card-meta"><span>{course.level}</span><span><span className="rating-star">★</span> {course.rating} <span className="muted">({course.reviews})</span></span></div>
      <Link className="course-card-title" to={`/courses/${course.id}`}><h3>{course.title}</h3></Link>
      <p className="course-card-description">{course.description}</p>
      <div className="course-card-teacher"><span className="teacher-avatar">{course.instructor.split(' ').map((part) => part[0]).slice(0, 2).join('')}</span><span>{course.instructor}</span><span className="card-lessons">{lessonCount(course)} leçons</span></div>
      {progress > 0 && <ProgressBar value={progress} label={`${progress}% terminé`} />}
      <div className="course-card-bottom"><span className="course-price">{course.price ? `${course.price} €` : 'Gratuit'}</span><Link className="text-link" to={`/courses/${course.id}`}>Découvrir <span aria-hidden="true">→</span></Link></div>
    </div>
  </article>;
}

export function Quiz({ quiz }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  if (!quiz) return null;
  const correct = selected === quiz.answer;
  return <section className="quiz-panel">
    <div className="quiz-heading"><span className="quiz-icon">?</span><div><span className="eyebrow">À vous de jouer</span><h3>Vérifiez vos acquis</h3></div></div>
    <p className="quiz-question">{quiz.question}</p>
    <div className="quiz-options">{quiz.options.map((option, index) => <button key={option} type="button" className={`quiz-option ${selected === index ? 'quiz-option-selected' : ''} ${submitted && index === quiz.answer ? 'quiz-option-correct' : ''} ${submitted && selected === index && !correct ? 'quiz-option-wrong' : ''}`} onClick={() => !submitted && setSelected(index)} disabled={submitted}>{option}<span>{submitted && index === quiz.answer ? '✓' : selected === index ? '●' : ''}</span></button>)}</div>
    {submitted && <p className={`quiz-feedback ${correct ? 'quiz-feedback-good' : 'quiz-feedback-bad'}`}><strong>Score : {correct ? '1/1' : '0/1'} · {correct ? 'Bonne réponse.' : 'Pas tout à fait.'}</strong> {quiz.explanation}</p>}
    {!submitted ? <button type="button" className="button button-primary button-small" disabled={selected === null} onClick={() => setSubmitted(true)}>Valider ma réponse</button> : <button type="button" className="button button-quiet button-small" onClick={() => { setSelected(null); setSubmitted(false); }}>Recommencer le quiz</button>}
  </section>;
}