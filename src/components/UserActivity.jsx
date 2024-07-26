// src/components/UserActivity.js
import React from 'react';
import '../css/UserActivity.css';

const UserActivity = ({ activities }) => {
  return (
    <div className="user-activity">
      <h2>User Activities</h2>
      <ul>
        {activities.map((activity, index) => (
          <li key={index} className="activity-item">
            <img src={activity.user.profilePicture} alt={activity.user.name} className="profile-picture" />
            <div className="activity-details">
              <p><strong>{activity.user.name}</strong></p>
              <p>{activity.action}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivity;
