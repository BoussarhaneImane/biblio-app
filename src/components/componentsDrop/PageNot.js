import React from 'react';
import './PageNot.css'; 
import FirstNav from '../Navbar/FirstNav';
import Navbar from '../Navbar/Navbar';
function PageNot() {
  return (
     <>
     <FirstNav/>
     <Navbar/>
    <div className="page-not">
      <h1>Oops! Page Not Available</h1>
      <p>This page is not available right now. It was not created by the developers.</p>
      <p>This is just a testing site.</p>
    </div>
    
</>
  );
}

export default PageNot;
