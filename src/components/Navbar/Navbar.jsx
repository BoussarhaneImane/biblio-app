import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import imglogo from '../../images/logo2.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState({ courses: false, teachers: false, offers: false });

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const handleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <nav className='navbar' id="navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={imglogo} style={{ width: '28px', height: '28px' }} alt="Logo" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Learn.</span>
          </Link>
          <button type="button" className='navbar-toggler-btn' onClick={handleNavbar}>
            {toggleMenu ? <HiOutlineX size={35} style={{ color: '#fff' }} /> : <HiOutlineMenuAlt3 size={35} style={{ color: '#010101' }} />}
          </button>
        </div>

        <div className={toggleMenu ? 'navbar-collapse show-navbar-collapse' : 'navbar-collapse'}>
          <ul className="navbar-nav">
            <li className='nav-item' onMouseEnter={() => handleDropdown('courses')} onMouseLeave={() => handleDropdown('courses')}>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Courses</span>
              <div className={dropdown.courses ? 'dropdown-menu show-dropdown' : 'dropdown-menu'}>
                <div className="dropdown-category">
                  <span className="dropdown-title">Development</span>
                  <Link to="/courses/development/conceptit">Concept IT</Link>
                </div>
                <div className="dropdown-category">
                  <span className="dropdown-title">Learning English</span>
                  <Link to="/courses/learning-english">Basic</Link>
                  <Link to="/courses/learning-english">Intermediate</Link>
                  <Link to="/courses/learning-english">Advanced</Link>
                </div>
                <div className="dropdown-category">
                  <span className="dropdown-title">Learning German</span>
                  <Link to="/courses/learning-german/basic">Basic</Link>
                  <Link to="/courses/learning-german/intermediate">Intermediate</Link>
                  <Link to="/courses/learning-german/advanced">Advanced</Link>
                </div>
                <div className="dropdown-category">
                  <span className="dropdown-title">Mathematics</span>
                  <Link to="/courses/mathematics/algebra">Algebra</Link>
                  <Link to="/courses/mathematics/calculus">Calculus</Link>
                  <Link to="/courses/mathematics/geometry">Geometry</Link>
                  <Link to="/courses/mathematics/statistics">Statistics</Link>
                </div>
              </div>
            </li>
            <li className='nav-item' onMouseEnter={() => handleDropdown('teachers')} onMouseLeave={() => handleDropdown('teachers')}>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Teachers</span>
              <div className={dropdown.teachers ? 'dropdown-menu show-dropdown' : 'dropdown-menu'}>
                <Link to="/teachers/math">Math</Link>
                <Link to="/teachers/science">Development</Link>
                <Link to="/teachers/english">Languages</Link>
              </div>
            </li>
            <li className='nav-item' onMouseEnter={() => handleDropdown('offers')} onMouseLeave={() => handleDropdown('offers')}>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Offers</span>
              <div className={dropdown.offers ? 'dropdown-menu show-dropdown' : 'dropdown-menu'}>
                <Link to="/offers/discounts">Discounts</Link>
                <Link to="/offers/bundles">Bundles</Link>
                <Link to="/offers/free-courses">Free Courses</Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to="/contact" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Contact</Link>
            </li>
            <li className='nav-item'>
              <button id='btn1'>Log In</button>
            </li>
            <li className='nav-item'>
              <button className='btntwoo'>Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;





