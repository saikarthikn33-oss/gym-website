import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Section from '../ui/Section';
import Input from '../ui/Input';
import Button from '../ui/Button';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({ user_name: '', user_phone: '', user_email: '', time: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b14h71e",
      "template_ws0hmrk",
      e.target,
      "1h6Zn9kvWiJ0SroA7"
    )
    .then(() => {
        alert("✅ Booking Request Sent Successfully!");
    })
    .catch(() => {
        alert("❌ Failed to send booking request. Please check your IDs.");
    });

    e.target.reset();
    setFormData({ user_name: '', user_phone: '', user_email: '', time: '' });
  };

  return (
    <Section id="booking" dark>
      <div className="booking-container">
        <div className="booking-content">
          <h2>Book Your <span className="text-accent">Free Trial</span></h2>
          <p>Experience our facility and meet our expert trainers. No commitment required. Fill out the form to reserve your spot.</p>
        </div>
        <div className="booking-form-wrapper">
          <form onSubmit={sendEmail} className="booking-form">
            <Input label="Full Name" name="user_name" value={formData.user_name} onChange={handleChange} required />
            <Input label="Phone Number" name="user_phone" type="tel" value={formData.user_phone} onChange={handleChange} required />
            <Input label="Email Address" name="user_email" type="email" value={formData.user_email} onChange={handleChange} required />
            
            <div className="input-group">
              <label className="input-label">Preferred Time Slot</label>
              <select className="input-field" name="time" value={formData.time} onChange={handleChange} required>
                <option value="" disabled>Select a time</option>
                <option value="morning">Morning (6 AM - 10 AM)</option>
                <option value="afternoon">Afternoon (12 PM - 4 PM)</option>
                <option value="evening">Evening (5 PM - 9 PM)</option>
              </select>
            </div>

            <Button variant="primary" type="submit" className="booking-submit">Book Free Trial</Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Booking;
