import React from 'react';
import './roadside.css';

const Roadside = () => {
    const phoneNumber = '+1234567890';
  
    const handleCallClick = () => {
      window.location.href = `tel:${phoneNumber}`;
    };
  
  return (
    <div className='roadside-banner'>
      <h1>Get 24/7 Roadside assistance!</h1>
      <button onClick={handleCallClick} className='roadside-button'>Roadside Assistance</button>
    </div>
  );
};

export default Roadside;
