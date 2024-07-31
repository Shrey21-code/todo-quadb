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
// import React, { useState } from 'react';
// import { FaBars, FaSearch, FaSun, FaMoon, FaBell } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = ({ toggleSidebar }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.body.classList.remove('dark-mode');
//     } else {
//       document.body.classList.add('dark-mode');
//     }
//   };

//   return (
//     <div className={`navbar ${darkMode ? 'dark' : ''}`}>
//       <div className="navbar-left">
//         <FaBars className="navbar-icon" onClick={toggleSidebar} />
//         <img src="https://via.placeholder.com/30" alt="Logo" className="navbar-logo" />
//         <span className="navbar-title">DoIt</span>
//       </div>
//       <div className="navbar-right">
//         <FaSearch className="navbar-icon" />
//         <FaBell className="navbar-icon" />
//         {darkMode ? (
//           <FaMoon className="navbar-icon" onClick={toggleDarkMode} />
//         ) : (
//           <FaSun className="navbar-icon" onClick={toggleDarkMode} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import { FaBars, FaSearch, FaSun, FaMoon, FaBell } from 'react-icons/fa';
// import './Navbar.css';
// import logo from '../assets/logomark.png';

// const Navbar = ({ toggleSidebar, onSearch }) => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     if (darkMode) {
//       document.body.classList.remove('dark-mode');
//     } else {
//       document.body.classList.add('dark-mode');
//     }
//   };

//   const handleSearchIconClick = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchQuery);
//     setIsSearchOpen(false);
//   };

//   return (
//     <div className={`navbar ${darkMode ? 'dark' : ''}`}>
//       <div className="navbar-left">
//         <FaBars className="navbar-icon" onClick={toggleSidebar} />
//         <img src={logo} alt="Logo" className="navbar-logo" />
//         <span className="navbar-title">DoIt</span>
//       </div>
//       <div className="navbar-right">
//         {isSearchOpen ? (
//           <form onSubmit={handleSearchSubmit} className="navbar-search-form">
//             <input
//               type="text"
//               className="navbar-search-input"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search..."
//             />
//           </form>
//         ) : (
//           <FaSearch className="navbar-icon" onClick={handleSearchIconClick} />
//         )}
//         <FaBell className="navbar-icon" />
//         {darkMode ? (
//           <FaMoon className="navbar-icon" onClick={toggleDarkMode} />
//         ) : (
//           <FaSun className="navbar-icon" onClick={toggleDarkMode} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaSearch, FaSun, FaMoon, FaBell } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/logomark.png';

const Navbar = ({ toggleSidebar, onSearch }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchOpen(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
    setIsSearchOpen(false);
  };

  const handleClickOutside = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="navbar-left">
        <FaBars className="navbar-icon" onClick={toggleSidebar} />
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="navbar-title">DoIt</span>
      </div>
      <div className="navbar-right">
        {isSearchOpen ? (
          <form onSubmit={handleSearchSubmit} className="navbar-search-form" ref={searchInputRef}>
            <input
              type="text"
              className="navbar-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              autoFocus
            />
          </form>
        ) : (
          <FaSearch className="navbar-icon" onClick={handleSearchIconClick} />
        )}
        <FaBell className="navbar-icon" />
        {darkMode ? (
          <FaSun className="navbar-icon" onClick={toggleDarkMode} />
        ) : (
          <FaMoon className="navbar-icon" onClick={toggleDarkMode} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
