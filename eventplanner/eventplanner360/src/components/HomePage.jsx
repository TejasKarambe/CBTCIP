import React from 'react';
import './styles.css'; // Import your CSS file for HomePage
import bgvideo from './videofile.mp4'

const HomePage = () => {
  return (
    <div className="homepage">
{/* Ensure Navigation is only included once here */}

<video autoPlay muted loop id="myVideo">
  <source src={bgvideo} type="video/mp4" />
</video>

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EventPlanner360</h1>
          <p>Your all-in-one solution for event management</p>
        </div>
      </section>

      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero sit amet nisl sodales, a eleifend arcu aliquet. Morbi blandit et arcu vel fringilla.</p>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <ul>
            <li>Event Planning</li>
            <li>Vendor Coordination</li>
            <li>Guest List Management</li>
            <li>Budget Tracking</li>
            <li>Event Schedule Management</li>
          </ul>
        </div>
      </section>

      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Email: info@eventplanner360.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 EventPlanner360. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
