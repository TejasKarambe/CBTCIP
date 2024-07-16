import React from 'react';
import './EventPage.css'; // Import your CSS file for EventCard

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <div className="event-card-header" style={{ backgroundImage: `url(${event.imageUrl})` }}>
        <div className="overlay"></div>
        <h2 className="event-card-title">{event.name}</h2>
      </div>
      <div className="event-card-body">
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventCard;
