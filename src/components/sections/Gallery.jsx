import React from 'react';
import Section from '../ui/Section';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <Section id="gallery" dark>
      <h2>Our <span className="text-accent">Facility</span></h2>
      <div className="gallery-grid">
        {images.map((img, idx) => (
          <div key={idx} className="gallery-item">
            <img src={img} alt={`Facility view ${idx+1}`} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Gallery;
