// src/components/HotelPage.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../css/HotelPage.css';

const HotelPage = ({ hotel, onDraftBooking, onCompleteBooking }) => {
  const { id } = useParams();

  useEffect(() => {
    // Fetch hotel details if needed using the id from the URL
    // This example assumes the hotel is already set from the HotelList component
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hotel-page">
      <img src={hotel.image} alt={hotel.name} />
      <h2>{hotel.name}</h2>
      <p>Location: {hotel.location}</p>
      <p>Rating: {hotel.rating}</p>
      <button onClick={onDraftBooking}>Draft Booking</button>
      <button onClick={onCompleteBooking}>Complete Booking</button>
    </div>
  );
};

export default HotelPage;
