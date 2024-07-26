// src/components/HotelList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HotelList.css';

const HotelList = ({ hotels, onHotelClick }) => {
  return (
    <div>
      <h2>Hotels</h2>
      <ul className="hotel-list">
        {hotels.map(hotel => (
          <li key={hotel.id} onClick={() => onHotelClick(hotel)}>
            <Link to={`/hotel/${hotel.id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
