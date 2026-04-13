import React from 'react';
import Section from '../ui/Section';
import './Trainers.css';

const Trainers = () => {
  const trainers = [
    { name: 'Alex Johnson', role: 'Head Coach', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop', spec: 'Strength & Conditioning' },
    { name: 'Sarah Williams', role: 'Yoga & Pilates', img: 'https://images.unsplash.com/photo-1548690143-2abadde677ab?q=80&w=2072&auto=format&fit=crop', spec: 'Flexibility & Core' },
    { name: 'Mike Davis', role: 'Fitness Expert', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=2070&auto=format&fit=crop', spec: 'HIIT & Cardio' }
  ];

  return (
    <Section id="trainers" dark={false}>
      <h2>Meet Our <span className="text-accent">Trainers</span></h2>
      <div className="trainers-grid">
        {trainers.map((trainer, idx) => (
          <div key={idx} className="trainer-card">
            <div className="trainer-img">
              <img src={trainer.img} alt={trainer.name} />
              <div className="trainer-overlay">
                <span className="trainer-spec">{trainer.spec}</span>
              </div>
            </div>
            <div className="trainer-info">
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Trainers;
