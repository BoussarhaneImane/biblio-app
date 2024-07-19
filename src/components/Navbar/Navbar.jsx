import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa'; // Import de l'icône FaUser
import imglogo from '../../images/logo2.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [dropdown, setDropdown] = useState({ courses: false, teachers: false, offers: false });
  const [userName, setUserName] = useState('');

  const handleNavbar = () => setToggleMenu(!toggleMenu);

  const handleDropdown = (menu) => {
    setDropdown((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  // Exécuté une seule fois lors du montage du composant
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userName');
    setUserName('');
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
                  <Link to="/NOT">Basic</Link>
                  <Link to="/NOT">Intermediate</Link>
                  <Link to="/NOT">Advanced</Link>
                </div>
                <div className="dropdown-category">
                  <span className="dropdown-title">Mathematics</span>
                  <Link to="/NOT">Algebra</Link>
                  <Link to="/NOT">Calculus</Link>
                  <Link to="/NOT">Geometry</Link>
                  <Link to="/NOT">Statistics</Link>
                </div>
              </div>
            </li>
            <li className='nav-item' onMouseEnter={() => handleDropdown('teachers')} onMouseLeave={() => handleDropdown('teachers')}>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Teachers</span>
              <div className={dropdown.teachers ? 'dropdown-menu show-dropdown' : 'dropdown-menu'}>
                <Link to="/NOT">Math</Link>
                <Link to="/NOT">Development</Link>
                <Link to="/NOT">Languages</Link>
              </div>
            </li>
            <li className='nav-item' onMouseEnter={() => handleDropdown('offers')} onMouseLeave={() => handleDropdown('offers')}>
              <span className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Offers</span>
              <div className={dropdown.offers ? 'dropdown-menu show-dropdown' : 'dropdown-menu'}>
                <Link to="/NOT">Discounts</Link>
                <Link to="/NOT">Bundles</Link>
                <Link to="/NOT">Free Courses</Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to="/signup" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1 ' style={{marginRight:'2rem'}} >Contact</Link>
            </li>
            {userName ? (
              <>
                <span className="nav-link text-white flex items-center">
                  <span className="mr-1" style={{color:'#d52343'}}>Welcome</span>
                  <FaUser className="mr-1" style={{fontSize:'3rem'}} /> 
                  <p style={{color:'#d52343'}}>{userName}</p>
                </span>
                <li className='nav-item'>
                  <Link to="/" onClick={handleLogout} className="nav-link"><button id='btn1'>Log out</button></Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link to="/signup" className="nav-link"><button id='btn1'>Sign Up</button></Link>
                </li>
                <li className='nav-item'>
                  <Link to="/login" className="nav-link"><button className='btntwoo'>Log In</button></Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
