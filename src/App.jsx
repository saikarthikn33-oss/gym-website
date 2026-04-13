import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Highlights from './components/sections/Highlights';
import MembershipPlans from './components/sections/MembershipPlans';
import Booking from './components/sections/Booking';
import Trainers from './components/sections/Trainers';
import Gallery from './components/sections/Gallery';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <MembershipPlans />
        <Trainers />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;