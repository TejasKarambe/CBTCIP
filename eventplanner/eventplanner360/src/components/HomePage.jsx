import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file for HomePage

const images = [
  '/images/bgimg.jpg',
  '/images/bgimg2.jpg',
  '/images/bgimg3.jpg',
  '/images/bgimg4.jpg',
  '/images/bgimg5.jpg'
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="homepage"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >

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
