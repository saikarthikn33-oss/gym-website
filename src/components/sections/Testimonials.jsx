import React from 'react';
import Section from '../ui/Section';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    { text: "Joining Golden Fitness was the best decision I ever made. I lost 20lbs in 3 months and feel amazing. The trainers are incredibly supportive.", author: "Jane Doe", beforeAfter: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" },
    { text: "The atmosphere here is unmatched. Everyone is focused and it really pushes you to do your best. Great equipment too.", author: "John Smith", beforeAfter: null }
  ];

  return (
    <Section id="testimonials" dark={false}>
      <h2>Success <span className="text-accent">Stories</span></h2>
      <div className="testimonials-grid">
        {reviews.map((rev, idx) => (
          <div key={idx} className="testimonial-card">
            {rev.beforeAfter && (
              <div className="test-img-wrap">
                <img src={rev.beforeAfter} alt="Before and After" className="test-img" />
              </div>
            )}
            <div className="test-content">
              <div className="test-quotes">"</div>
              <p>{rev.text}</p>
              <h4>- {rev.author}</h4>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
