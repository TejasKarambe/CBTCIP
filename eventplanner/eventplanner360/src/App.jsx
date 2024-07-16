import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import EventListPage from './components/EventListPage';
import EventDetail from './components/EventDetail'; // Replace with actual component for event detail
import BudgetTrackingPage from './components/BudgetTrackingPage';
import EventSchedulePage from './components/EventSchedulePage';
import GuestListPage from './components/GuestListPage';
import VendorCoordinationPage from './components/VendorCoordinationPage';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventDetail />} />
        <Route path="/budget" element={<BudgetTrackingPage />} />
        <Route path="/schedule" element={<EventSchedulePage />} />
        <Route path="/guest-list" element={<GuestListPage />} />
        <Route path="/vendor-coordination" element={<VendorCoordinationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
