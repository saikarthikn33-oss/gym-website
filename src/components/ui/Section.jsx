import React from 'react';
import './Section.css';

const Section = ({ id, children, className = '', dark = false }) => {
  return (
    <section id={id} className={`section ${dark ? 'section-dark' : 'section-light'} ${className}`}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};

export default Section;
