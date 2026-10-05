import React, { useEffect, useState } from 'react';
import './PopularCourses.css';
import img1 from '../../images/lib5.jpg'
import img2 from '../../images/lib6.jpg'
import img3 from '../../images/lib7.jpg'
import imgp1 from '../../images/prof1.jpg'
import imgp2 from '../../images/prof2.jpg'
import imgp3 from '../../images/prof4.jpg'
import { IoIosStar } from "react-icons/io";
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

const courses = [
  {
    id: 'programming',
    title: 'Introduction to Programming',
    teacher: 'John Doe',
    price: '$99',
    rating: 4.5,
    image: img1,
    teacherImage: imgp1
  },
  {
    id: 'mathematics',
    title: 'Advanced Mathematics',
    teacher: 'Jane Smith',
    price: '$120',
    rating: 4.8,
    image: img2,
    teacherImage: imgp2
  },
  {
    id: 'english',
    title: 'Learning English',
    teacher: 'Emily Johnson',
    price: '$80',
    rating: 4.7,
    image: img3,
    teacherImage: imgp3
  }
];

const PopularCourses = () => {
  const [learningState, setLearningState] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('learningState')) || { progress: {}, saved: [] };
    } catch {
      return { progress: {}, saved: [] };
    }
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('learningState', JSON.stringify(learningState));
  }, [learningState]);

  const updateProgress = (courseId) => {
    setLearningState((current) => ({
      ...current,
      progress: {
        ...current.progress,
        [courseId]: Math.min((current.progress[courseId] || 0) + 25, 100),
      },
    }));
  };

  const toggleSaved = (courseId) => {
    setLearningState((current) => ({
      ...current,
      saved: current.saved.includes(courseId)
        ? current.saved.filter((savedId) => savedId !== courseId)
        : [...current.saved, courseId],
    }));
  };

  const visibleCourses = courses.filter((course) => {
    const progress = learningState.progress[course.id] || 0;
    if (filter === 'in-progress') return progress > 0 && progress < 100;
    if (filter === 'saved') return learningState.saved.includes(course.id);
    return true;
  });
  const inProgressCount = courses.filter((course) => {
    const progress = learningState.progress[course.id] || 0;
    return progress > 0 && progress < 100;
  }).length;
  const completedCount = courses.filter((course) => learningState.progress[course.id] === 100).length;

  return (
    <section id="learning" className="courses-container">
      <div className="learning-heading">
        <div>
          <p className="learning-eyebrow">YOUR LEARNING SPACE</p>
          <h2>Our Popular Courses</h2>
        </div>
        <p className="learning-summary">{inProgressCount} in progress <span>·</span> {completedCount} completed</p>
      </div>
      <div className="learning-filters" role="group" aria-label="Filter courses">
        <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All courses</button>
        <button type="button" className={filter === 'in-progress' ? 'active' : ''} onClick={() => setFilter('in-progress')}>In progress</button>
        <button type="button" className={filter === 'saved' ? 'active' : ''} onClick={() => setFilter('saved')}>Saved</button>
      </div>
      <div className="courses-list">
        {visibleCourses.map((course) => {
          const progress = learningState.progress[course.id] || 0;
          const isSaved = learningState.saved.includes(course.id);
          return (
          <article className="course-cardC" key={course.id}>
            <img src={course.image} alt={course.title} className="course-imageP" />
            <button
              type="button"
              className="course-save-button"
              onClick={() => toggleSaved(course.id)}
              aria-label={isSaved ? `Remove ${course.title} from saved courses` : `Save ${course.title}`}
              aria-pressed={isSaved}
            >
              {isSaved ? <FaBookmark /> : <FaRegBookmark />}
            </button>
            <div className="course-info">
              <h3>{course.title}</h3>
              <div className="teacher-info">
                <img src={course.teacherImage} alt={course.teacher} className="teacher-image" />
                <span>{course.teacher}</span>
              </div>
              <p className="course-price" style={{fontSize:"1.5rem"}}>{course.price}</p>
              <p className="course-rating" style={{fontSize:"1.4rem"}}>Rating: {course.rating} <IoIosStar size={18} style={{color:'rgb(250, 230, 13)'}} /></p>
              <div className="course-progress">
                <div className="course-progress-label"><span>Your progress</span><span>{progress}%</span></div>
                <progress value={progress} max="100" aria-label={`${course.title} progress`} />
              </div>
              <button
                type="button"
                className="course-start-button"
                onClick={() => updateProgress(course.id)}
                disabled={progress === 100}
              >
                {progress === 100 ? 'Course completed' : progress === 0 ? 'Start learning' : 'Continue learning'}
              </button>
            </div>
          </article>
          );
        })}
        {visibleCourses.length === 0 && <p className="learning-empty">No courses here yet. Start a course or save one to see it here.</p>}
      </div>
    </section>
  );
}

export default PopularCourses;
