// src/components/Recommendations.js
import React from 'react';
import '../css/Recommendations.css';

const Recommendations = ({ recommendations }) => {
  return (
    <div className="recommendations-container">
      <h2 className="recommendations-title">Recommended Hotels</h2>
      <ul className="recommendations-list">
        {recommendations.map(hotel => (
          <li key={hotel.id} className="recommendations-item">
            <img src={hotel.image} alt={hotel.name} className="recommendations-image" />
            <div className="recommendations-details">
              <h3 className="recommendations-name">{hotel.name}</h3>
              <p className="recommendations-location">{hotel.location}</p>
              <p className="recommendations-rating">Rating: {hotel.rating} ★</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recommendations;
