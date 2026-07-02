import { useState } from 'react';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="nav-content">
        <a href="#" className="logo">Hobdar Haider</a>
        
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

       <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
  {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
    <li
      key={item}
      style={{ transitionDelay: isOpen ? `${index * 0.1}s` : '0s' }}
    >
      <a
        href={`#${item.toLowerCase()}`}
        onClick={closeMenu}
      >
        {item}
      </a>
    </li>
  ))}
</ul>
      </div>
    </nav>
  );
};

export default Navigation;
