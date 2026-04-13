import React from 'react';
import emailjs from 'emailjs-com';
import Button from '../ui/Button';
import './CTASection.css';

const CTASection = ({ title, subtitle }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID", 
      "YOUR_TEMPLATE_ID", 
      e.target, 
      "YOUR_PUBLIC_KEY"
    )
    .then(() => {
        alert("✅ Message Sent Successfully!");
    })
    .catch(() => {
        alert("❌ Failed to send message");
    });

    e.target.reset();
  };

  return (
    <div className="cta-banner">
      <div className="cta-banner-content">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
        <form onSubmit={sendEmail} className="cta-form">
          <input type="text" name="user_name" placeholder="Your Name" required className="cta-input" />
          <input type="email" name="user_email" placeholder="Your Email" required className="cta-input" />
          <input type="tel" name="user_phone" placeholder="Phone Number" required className="cta-input" />
          <textarea name="message" placeholder="Message" className="cta-input"></textarea>

          <Button variant="primary" type="submit">Book Free Trial</Button>
        </form>
      </div>
    </div>
  );
};

export default CTASection;
