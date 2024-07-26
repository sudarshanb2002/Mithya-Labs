// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HotelList from './components/HotelList';
import HotelPage from './components/HotelPage';
import UserActivity from './components/UserActivity';
import Recommendations from './components/Recommendations';
import Login from './components/Login';
import ProtectedLayout from './components/ProtectedLayout';
import { LoginProvider, LoginContext } from './context/LoginContext';
import hotelsData from './hotels.json';
import './App.css';

const App = () => {
  const [hotels] = useState(hotelsData);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [activities, setActivities] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    setActivities([...activities, { user: { name: 'John Doe', profilePicture: '/images/profile.png' }, action: `Visited ${hotel.name}` }]);
  };

  const handleDraftBooking = () => {
    setActivities([...activities, { user: { name: 'John Doe', profilePicture: '/images/profile.png' }, action: `Draft Booking for ${selectedHotel.name}` }]);
  };

  const handleCompleteBooking = () => {
    setActivities([...activities, { user: { name: 'John Doe', profilePicture: '/images/profile.png' }, action: `Completed Booking for ${selectedHotel.name}` }]);
    setRecommendations(hotels.filter(hotel => hotel.id !== selectedHotel.id));
  };

  return (
    <LoginProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={
              <ProtectedLayout>
                <nav className="navbar">
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <LoginContext.Consumer>
                      {({ role }) => (
                        <>
                          {role === 'admin' && (
                            <li>
                              <Link to="/activities">Activities</Link>
                            </li>
                          )}
                          {role !== 'admin' && (
                            <li>
                              <Link to="/recommendations">Recommendations</Link>
                            </li>
                          )}
                        </>
                      )}
                    </LoginContext.Consumer>
                  </ul>
                </nav>
                <div className="container">
                  <Routes>
                    <Route path="/" element={<HotelList hotels={hotels} onHotelClick={handleHotelClick} />} />
                    <Route path="/hotel/:id" element={<HotelPage hotel={selectedHotel} onDraftBooking={handleDraftBooking} onCompleteBooking={handleCompleteBooking} />} />
                    <Route path="/recommendations" element={<Recommendations recommendations={recommendations} />} />
                    <Route path="/activities" element={<UserActivity activities={activities} />} />
                  </Routes>
                </div>
              </ProtectedLayout>
            } />
          </Routes>
        </div>
      </Router>
    </LoginProvider>
  );
};

export default App;
