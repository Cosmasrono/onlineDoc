// Counselor.js

import React from 'react';

interface CounselorProps {
  counselor: {
    id: number;
    name: string;
    specialization: string;
    availability: {
      monday: string[];
      tuesday: string[];
      // Add availability for other days
    };
  };
  onCounselorClick: (counselor: any) => void;
  onBookAppointment: (counselor: any) => void; // New function for booking appointment
}

const Counselor: React.FC<CounselorProps> = ({ counselor, onCounselorClick, onBookAppointment }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{counselor.name}</h3>
      <p>Specialization: {counselor.specialization}</p>
      <p>Availability:</p>
      <ul>
        <li>Monday: {counselor.availability.monday.join(', ')}</li>
        <li>Tuesday: {counselor.availability.tuesday.join(', ')}</li>
        {/* Add availability for other days */}
      </ul>
      <button onClick={() => onCounselorClick(counselor)}>Select Counselor</button>
      <button onClick={() => onBookAppointment(counselor)}>Book Appointment</button>
    </div>
  );
};

export default Counselor;
