import React, { useState } from 'react';
import './notifications.css';
import logo from '../assets/tut-logo.jpg';

const notificationsData = [
  {
    id: 1,
    message: 'You are financial unblocked..........',
    color: 'green',
  },
  {
    id: 2,
    message: 'You are financial blocked..........',
    color: 'red',
  },
  {
    id: 3,
    message: 'You are currently placed on probation..........',
    color: 'orange',
  },
];

const BellIcon = ({ color }) => {
  const fillColor = color === 'green' ? '#4CAF50' : color === 'red' ? '#F44336' : '#FF9800';
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 24c1.104 0 2-.896 2-2h-4c0 1.104.896 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V6c0-.828-.672-1.5-1.5-1.5S11.5 5.172 11.5 6v.68C8.64 7.36 7 9.93 7 13v5l-2 2v1h14v-1l-2-2z" />
    </svg>
  );
};

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#800040"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Notifications = () => {
  const [viewMessage, setViewMessage] = useState(null);

  const closeModal = () => setViewMessage(null);

  return (
    <div className="notifications-container">
      <header className="notifications-header">
        <div className="logo-scrs-container">
          <img src={logo} alt="Tshwane University of Technology Logo" className="logo" />
          <span className="scrs-text">SCRS</span>
        </div>
      </header>
      <span>
        <h2 className="notifications-title">Notifications</h2>
      </span>

      <div className="notifications-list">
        {notificationsData.map(({ id, message, color }) => (
          <div key={id} className="notification-item">
            <div className="bell-icon">
              <BellIcon color={color} />
            </div>
            <div className="notification-message">{message}</div>
            <button className="view-button" onClick={() => setViewMessage(message)}>view</button>
            <div className="check-icon">
              <CheckIcon />
            </div>
          </div>
        ))}
      </div>

      {viewMessage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <p>{viewMessage}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      <div className="back-arrow">
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
    </div>
  );
};

export default Notifications;
