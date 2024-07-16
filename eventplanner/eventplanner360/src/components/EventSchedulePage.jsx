import React from 'react';
import './EventSchedulePage.css'; // Import your CSS file for EventSchedulePage

const EventSchedulePage = () => {
  const schedule = [
    {
      time: "10:00 AM",
      activity: "Registration and Welcome",
      description: "Guests arrive, registration desk open, and welcome refreshments served."
    },
    {
      time: "11:00 AM",
      activity: "Keynote Speech",
      description: "Opening keynote speech by the guest speaker."
    },
    {
      time: "1:00 PM",
      activity: "Lunch Break",
      description: "Buffet lunch served in the dining area."
    },
    {
      time: "2:00 PM",
      activity: "Workshop Sessions",
      description: "Breakout into workshop sessions with various topics."
    },
    {
      time: "5:00 PM",
      activity: "Networking",
      description: "Networking session with drinks and snacks."
    },
    {
      time: "7:00 PM",
      activity: "Closing Ceremony",
      description: "Closing remarks and thank you speech."
    },
  ];

  return (
    <div className="event-schedule-page">
      <h1>Event Schedule</h1>
      <div className="schedule-list">
        {schedule.map((item, index) => (
          <div className="schedule-item" key={index}>
            <h2>{item.time}</h2>
            <h3>{item.activity}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSchedulePage;
