import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
    
    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Function to scroll to a particular section with an offset
  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - offset,
        behavior: 'smooth',
      });
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here
    // For example, clear session, local storage, etc.
    // Redirect to logout page
    window.location.href = '/logout'; // Redirect to the logout page
  };
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='/Profile'>Profile</Link></li>
        <li><a href="#menus-section" onClick={() => scrollToSection('menus-section', 50)}>Info</a></li>
        <li><a href="#contact-section" onClick={() => scrollToSection('contact-section')}>Contact us</a></li>
        <li><Link to='/Videos'>Videos</Link></li>
        <li><button className="logout-button" onClick={handleLogout}>Logout</button></li>
      </ul>
      <img src={menu_icon} alt='' className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
  
}
export default Navbar;