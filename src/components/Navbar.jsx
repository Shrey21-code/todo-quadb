// src/components/Navbar.js
// import React from 'react';
// import { FaBars, FaSearch, FaTh, FaMoon } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-left">
//         <FaBars className="navbar-icon" />
//         <img src="https://via.placeholder.com/50" alt="Logo" className="navbar-logo" />
//         <span className="navbar-title">DoIt</span>
//       </div>
//       <div className="navbar-right">
//         <FaSearch className="navbar-icon" />
//         <FaTh className="navbar-icon" />
//         <FaMoon className="navbar-icon" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// src/components/Navbar.js
import React from 'react';
import { FaBars, FaSearch, FaSun, FaBell } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <FaBars className="navbar-icon" onClick={toggleSidebar}/>
        <img src="https://via.placeholder.com/30" alt="Logo" className="navbar-logo" />
        <span className="navbar-title">DoIt</span>
      </div>
      <div className="navbar-right">
        <FaSearch className="navbar-icon" />
        <FaBell className="navbar-icon" />
        <FaSun className="navbar-icon" />
      </div>
    </div>
  );
};

export default Navbar;
