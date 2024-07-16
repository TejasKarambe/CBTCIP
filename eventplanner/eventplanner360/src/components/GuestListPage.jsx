import React from 'react';
import './GuestListPage.css'; // Import your CSS file for GuestListPage

const GuestListPage = () => {
  const guests = [
    { name: "John Doe", status: "Confirmed" },
    { name: "Jane Smith", status: "Pending" },
    { name: "Michael Johnson", status: "Confirmed" },
    { name: "Emily Davis", status: "Declined" },
    // Add more guests as needed
  ];

  return (
    <div className="guest-list-page">
      <h1>Guest List</h1>
      <div className="guest-list">
        {guests.map((guest, index) => (
          <div className="guest-item" key={index}>
            <h3>{guest.name}</h3>
            <p className={`status ${guest.status.toLowerCase()}`}>{guest.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestListPage;
