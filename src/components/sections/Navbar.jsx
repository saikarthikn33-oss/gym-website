import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Button from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">GOLDEN<span>FITNESS</span></a>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#plans">Plans</a>
          <a href="#trainers">Trainers</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <Button variant="primary" onClick={() => window.location.href='#booking'}>Free Trial</Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
