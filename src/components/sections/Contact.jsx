import React from 'react';
import emailjs from 'emailjs-com';
import Section from '../ui/Section';
import Input from '../ui/Input';
import Button from '../ui/Button';
import './Contact.css';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_b14h71e",
      "template_ws0hmrk",
      e.target,
      "1h6Zn9kvWiJ0SroA7"
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
    <Section id="contact" dark>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In <span className="text-accent">Touch</span></h2>
          <p>Have questions? We're here to help you get started on your fitness journey.</p>
          
          <div className="contact-details">
            <div className="contact-item">
              <strong>Location:</strong>
              <p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=47-27-5/1%2C+Polyclinic+Rd%2C+beside+mandava+restaurant%2C+opposite+ankura+hospital%2C+Sai+Nagar%2C+Kala+Nagar%2C+Acharya+Ranga+Nagar%2C+Vijayawada%2C+Andhra+Pradesh+520010" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  47-27-5/1, Polyclinic Rd, Beside Mandava Restaurant, Opposite Ankura Hospital, Vijayawada, AP 520010
                </a>
              </p>
            </div>
            <div className="contact-item">
              <strong>Phone:</strong>
              <p><a href="tel:+918247869099">+91 82478 69099</a></p>
            </div>
            <div className="contact-item">
              <strong>Email:</strong>
              <p><a href="mailto:saikarthikn33@gmail.com">saikarthikn33@gmail.com</a></p>
            </div>
          </div>
          
          <div className="contact-actions">
            <Button variant="outline" onClick={() => window.open('https://wa.me/918247869099', '_blank')}>
              Message on WhatsApp
            </Button>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={sendEmail}>
            <Input label="Name" name="user_name" required />
            <Input label="Email" name="user_email" type="email" required />
            <Input label="Message" name="message" as="textarea" required />
            <Button variant="primary" type="submit" className="contact-submit">Send Message</Button>
          </form>
        </div>
      </div>
      
      <div 
        className="map-container" 
        onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=47-27-5/1%2C+Polyclinic+Rd%2C+beside+mandava+restaurant%2C+opposite+ankura+hospital%2C+Sai+Nagar%2C+Kala+Nagar%2C+Acharya+Ranga+Nagar%2C+Vijayawada%2C+Andhra+Pradesh+520010', '_blank')}
        style={{ cursor: 'pointer' }}
      >
        <div className="map-placeholder">
          <iframe 
            src="https://maps.google.com/maps?q=47-27-5/1,%20Polyclinic%20Rd,%20beside%20mandava%20restaurant,%20opposite%20ankura%20hospital,%20Sai%20Nagar,%20Kala%20Nagar,%20Acharya%20Ranga%20Nagar,%20Vijayawada,%20Andhra%20Pradesh%20520010&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, pointerEvents: 'none' }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Golden Fitness. All rights reserved.</p>
      </footer>
    </Section>
  );
};

export default Contact;
