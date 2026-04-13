import React from 'react';
import Section from '../ui/Section';
import './Highlights.css';

const Highlights = () => {
  const features = [
    { title: 'Modern Equipment', icon: '🏋️', desc: 'State-of-the-art machines and free weights for all levels.' },
    { title: 'Expert Trainers', icon: '🏆', desc: 'Certified professionals dedicated to your success.' },
    { title: 'Flexible Timings', icon: '⏰', desc: 'Open 24/7. Workout whenever it fits your schedule.' }
  ];

  return (
    <Section id="highlights" dark>
      <div className="highlights-grid">
        <div className="highlights-intro">
          <h2>Why Choose <br/><span className="text-accent">Golden Fitness?</span></h2>
          <p>We provide a premium fitness experience tailored to help you reach your maximum potential. Our facility is designed to inspire and motivate.</p>
        </div>
        <div className="features-container">
          {features.map((feat, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Highlights;
