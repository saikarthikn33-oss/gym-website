import React from 'react';
import './Hero.css';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="animate-fade-in-up">Transform Your Body Today</h1>
        <p className="animate-fade-in-up delay-100">
          Join the elite fitness community. Unmatched equipment, expert trainers, and a culture of success.
        </p>
        <div className="hero-actions animate-fade-in-up delay-200">
          <Button variant="primary" onClick={() => window.location.href='#plans'}>Join Now</Button>
          <Button variant="secondary" onClick={() => window.location.href='#booking'}>Book Free Trial</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
