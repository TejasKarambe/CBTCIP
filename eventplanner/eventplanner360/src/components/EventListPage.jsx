import React from 'react';
import EventCard from './EventCard'; // Example EventCard component
import './EventPage.css'; // Import your CSS file for EventPage

const events = [
  {
    id: 1,
    name: "Summer Gala 2024",
    date: "August 10, 2024",
    location: "Grand Ballroom, City Center",
    description: "Join us for an unforgettable evening of music, dance, and celebration!",
    imageUrl: "https://source.unsplash.com/1600x900/?event"
  },
  {
    id: 2,
    name: "Spring Wedding Expo",
    date: "April 25, 2024",
    location: "Exhibition Center, Downtown",
    description: "Explore the latest trends in wedding planning with top vendors and experts.",
    imageUrl: "https://source.unsplash.com/1600x900/?wedding"
  },
  {
    id: 3,
    name: "Corporate Conference 2024",
    date: "September 5-7, 2024",
    location: "Convention Center, Financial District",
    description: "A gathering of industry leaders and professionals to discuss future trends and strategies.",
    imageUrl: "https://source.unsplash.com/1600x900/?conference"
  }
];

const EventListPage = () => {
  return (
    <div className="event-page">
      <div className="event-cards">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventListPage;
