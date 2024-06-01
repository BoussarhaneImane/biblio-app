import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { courses } from '../Bares/data'; 
import './SearchForm.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const handleInputChange = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 0) {
      const results = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCourses(results);
    } else {
      setFilteredCourses([]);
    }
  };

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form className='search-form' onSubmit={(e) => e.preventDefault()}>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input
                type="text"
                className='form-control'
                placeholder='Search courses...'
                value={query}
                onChange={handleInputChange}
              />
              <button type="submit" className='flex flex-c'>
                <FaSearch className='search-item' size={32} />
              </button>
            </div>
          </form>
          {filteredCourses.length > 0 && (
            <div className='search-results'>
              {filteredCourses.map(course => (
                <div key={course.id} className='course-itemS'>
                  <img src={course.image} alt={course.name} />
                  <div className='course-detailsT'>
                    <h3>{course.name}</h3>
                    <p>Instructor: {course.instructor}</p>
                    <p>Price: {course.price}</p>
                    <p>Rating: {course.rating} ⭐</p>
                    <button>TAKE IT</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
